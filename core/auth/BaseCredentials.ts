/*
 * Copyright 2020 Huawei Technologies Co.,Ltd.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ICredential, isJsonContentType } from './ICredential';
import { IHttpRequest } from '../http/IHttpRequest';
import { AKSKSigner, RequiredError } from './AKSKSigner';
import { HttpRequestBuilder } from '../http/IHttpRequestBuilder';
import { HcClient } from '../HcClient';
import { IamService } from '../internal/services/iam.service';
import { AuthCache } from '../internal/services/authcache';
import { DerivedAKSKSigner } from './DerivedAKSKSigner';
import * as fs from 'fs';
import { SdkException } from '../exception/SdkException';

export abstract class BaseCredentials implements ICredential {
  private static DEFAULT_ENDPOINT_REG =
    /^(?<firstDomainNameLetter>[a-z])(?<firstDomainName>[a-z0-9-]+)(?<middleDomainName>(?<middleDomainPattern>\.[a-z]{2,}-[a-z]+-\d{1,2})?)(?<lastDomainName>\.(?<myPrefix>my)?(?<cloudProvider>huaweicloud|myhwclouds)).(?<domainSuffix>(?<topLevelDomain>com|cn))$/;
  private static readonly DEFAULT_EXPIRATION_THRESHOLD_SECONDS: number =
    40 * 60; // 2h

  ak?: string;
  sk?: string;
  securityToken?: string;
  iamEndpoint?: string;
  idpId?: string;
  idTokenFile?: string;
  expiredAt?: number;
  regionId?: string;
  derivedAuthServiceName?: string;
  public derivedPredicate?: (httpRequest: IHttpRequest) => boolean;

  constructor(data?: Partial<BaseCredentials>) {
    this.ak = data?.ak;
    this.sk = data?.sk;
    this.securityToken = data?.securityToken;
    this.iamEndpoint = data?.iamEndpoint;
    this.idpId = data?.idpId;
    this.idTokenFile = data?.idTokenFile;
    this.expiredAt = data?.expiredAt;
    this.regionId = data?.regionId;
    this.derivedAuthServiceName = data?.derivedAuthServiceName;
    this.derivedPredicate = data?.derivedPredicate;
  }

  public withAk(ak?: string): this {
    this.ak = ak;
    return this;
  }

  public withSk(sk?: string): this {
    this.sk = sk;
    return this;
  }

  public withSecurityToken(securityToken?: string): this {
    this.securityToken = securityToken;
    return this;
  }

  public withIamEndpoint(iamEndpoint: string): this {
    this.iamEndpoint = iamEndpoint;
    return this;
  }

  public withIdpId(idpId?: string): this {
    this.idpId = idpId;
    return this;
  }

  public withIdTokenFile(idTokenFile?: string): this {
    this.idTokenFile = idTokenFile;
    return this;
  }

  public getDerivedAuthServiceName(): string | undefined {
    return this.derivedAuthServiceName;
  }

  processDerivedAuthParams(
    derivedAuthServiceName: string,
    regionId: string | undefined
  ) {
    if (derivedAuthServiceName) {
      this.derivedAuthServiceName = derivedAuthServiceName;
    }
    if (regionId) {
      this.regionId = regionId;
    }
  }

  static getDefaultDerivedPredicate(request: any) {
    const hostname = new URL(request?.endpoint)?.hostname;
    return !this.DEFAULT_ENDPOINT_REG.test(hostname);
  }

  public withRegionId(regionId?: string): this {
    this.regionId = regionId;
    return this;
  }

  public getAk(): string | undefined {
    return this.ak;
  }

  public getSk(): string | undefined {
    return this.sk;
  }

  public getSecurityToken(): string | undefined {
    return this.securityToken;
  }

  public getIamEndpoint(): string | undefined {
    return this.iamEndpoint;
  }

  public getIdpId(): string | undefined {
    return this.idpId;
  }

  public getIdTokenFile(): string | undefined {
    return this.idTokenFile;
  }

  public getExpiredAt(): number | undefined {
    return this.expiredAt;
  }

  public getRegionId(): string | undefined {
    return this.regionId;
  }

  public abstract getPathParams(): Record<string, any>;

  public abstract getAuthHeaderName(): string;

  public abstract getAuthParamName(): string;

  public async processAuthRequest(
    hcClient: HcClient,
    httpRequest: IHttpRequest
  ): Promise<IHttpRequest> {
    if (this.needUpdateFederalAuthToken()) {
      await this.updateFederalAuthTokenByIdToken(hcClient);
    }

    await this.validateCredentials();

    const builder = new HttpRequestBuilder();
    builder.addPathParams(this.getPathParams());

    let url = httpRequest.url;
    const pathParams = this.getPathParams();
    if (Object.keys(pathParams).length > 0) {
      url = this.parsePath(url, pathParams);
      builder.withUrl(url);
    }
    builder.withEndpoint(`${httpRequest.endpoint}${url}`);

    this.addAuthHeaders(builder);

    if (!isJsonContentType(httpRequest.headers)) {
      builder.addHeaders('X-Sdk-Content-Sha256', 'UNSIGNED-PAYLOAD');
    }

    builder.addAllHeaders(httpRequest.headers);
    Object.assign(httpRequest, builder.build());

    const headers = this.isDerivedAuth(httpRequest)
      ? DerivedAKSKSigner.sign(httpRequest, this)
      : AKSKSigner.sign(httpRequest, this);

    builder.addAllHeaders(headers);

    return Object.assign(httpRequest, builder.build());
  }

  protected async validateCredentials(): Promise<void> {
    if (!this.ak) {
      throw new RequiredError('AK cannot be empty or undefined.');
    }
    if (!this.sk) {
      throw new RequiredError('SK cannot be empty or undefined.');
    }
  }

  protected addAuthHeaders(builder: HttpRequestBuilder): void {
    if (this.securityToken) {
      builder.addHeaders('X-Security-Token', this.securityToken);
    }

    const authParam = this.getPathParams()[this.getAuthParamName()];
    if (authParam) {
      builder.addHeaders(this.getAuthHeaderName(), authParam);
    }
  }

  public async processAuthParams(
    hcClient: HcClient,
    region?: string
  ): Promise<this> {
    const authParam = this.getPathParams()[this.getAuthParamName()];
    if (authParam) {
      return this;
    }

    const authCacheInstance = AuthCache.instance();

    let cacheName: string = '';
    if (this.getAk() !== null && this.getAk()?.trim() !== '') {
      cacheName = this.getAk() + (region ?? '') + this.getAuthParamName();
    } else if (this.getIdpId() !== null && this.getIdpId()?.trim() !== '') {
      cacheName = this.getIdpId() + (region ?? '') + this.getAuthParamName();
    }

    const cachedParam = authCacheInstance.getCache(cacheName);
    if (cachedParam) {
      this.setAuthParam(cachedParam);
      return this;
    }

    const param = await this.getAuthParamFromIam(hcClient, region);
    authCacheInstance.putCache(cacheName, param);
    this.setAuthParam(param);
    return this;
  }

  protected abstract getAuthParamFromIam(
    hcClient: HcClient,
    region?: string
  ): Promise<string>;

  protected abstract setAuthParam(value: string): void;

  parsePath(path: string | undefined, params: Record<string, any>): string {
    if (!path || !params) {
      return <string>path;
    }
    return Object.keys(params).reduce((parsedPath, param) => {
      const value = encodeURIComponent(params[param]);
      return parsedPath.replace(new RegExp(`{${param}}`), value);
    }, path);
  }

  protected needUpdateFederalAuthToken(): boolean {
    if (!this.idpId || !this.idTokenFile) {
      return false;
    }
    if (!this.securityToken || !this.expiredAt) {
      return true;
    }
    return (
      this.expiredAt - Date.now() <
      BaseCredentials.DEFAULT_EXPIRATION_THRESHOLD_SECONDS * 1000
    );
  }

  protected async updateFederalAuthTokenByIdToken(
    hcClient: HcClient
  ): Promise<void> {
    if (!this.idTokenFile || !this.idpId) {
      throw new RequiredError('idTokenFile or idpId is null.');
    }

    const idToken = fs.readFileSync(this.idTokenFile, 'utf-8').trim();
    if (!idToken) {
      throw new RequiredError(
        'idTokenFile content is null, idTokenFile: ',
        this.idTokenFile
      );
    }

    const iamService = new IamService(hcClient, this.iamEndpoint, true);

    try {
      const unscopedToken = await iamService.getUnscopedTokenWithIdToken(
        idToken,
        this.idpId
      );
      const response = await iamService.getTemporaryAccessKeyByToken(
        unscopedToken
      );

      this.ak = response.access;
      this.sk = response.secret;
      this.securityToken = response.securitytoken;
      const resExpiresAt = response.expires_at;

      if (resExpiresAt) {
        const expiredTime = resExpiresAt.replace('000Z', 'Z');
        this.expiredAt = new Date(expiredTime).getTime();
      }
    } catch (error) {
      throw new SdkException(
        `Failed to update federal auth token by ID token: ${error}`
      );
    }
  }

  public withDerivedPredicate(
    derivedPredicate?: (httpRequest: IHttpRequest) => boolean
  ): this {
    this.derivedPredicate = derivedPredicate;
    return this;
  }

  public isDerivedAuth(httpRequest: IHttpRequest) {
    if (!this.derivedPredicate) {
      return false;
    }
    return this.derivedPredicate(httpRequest);
  }
}
