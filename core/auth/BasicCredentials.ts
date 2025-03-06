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

import { ICredential, isJsonContentType } from "./ICredential";
import { IHttpRequest } from "../http/IHttpRequest";
import { AKSKSigner, RequiredError } from "./AKSKSigner";
import { HttpRequestBuilder } from "../http/IHttpRequestBuilder";
import { HcClient } from "../HcClient";
import { IamService } from "../internal/services/iam.service";
import { AuthCache } from "../internal/services/authcache";
import { DerivedAKSKSigner } from './DerivedAKSKSigner';

export class BasicCredentials implements ICredential {
    private static DEFAULT_ENDPOINT_REG = /^(?<firstDomainNameLetter>[a-z])(?<firstDomainName>[a-z0-9-]+)(?<middleDomainName>(\.[a-z]{2,}-[a-z]+-\d{1,2})?)(?<lastDomainName>\.(my)?(huaweicloud|myhwclouds)).(?<domainSuffix>(com|cn))$/;

    ak?: string;
    sk?: string;
    regionId?: string;
    derivedPredicate?: (httpRequest: IHttpRequest) => boolean;
    securityToken?: string;
    projectId?: string;
    iamEndpoint?: string;
    derivedAuthServiceName?: string;

    constructor(data?: Partial<BasicCredentials>) {
        this.ak = data?.ak;
        this.sk = data?.sk;
        this.regionId = data?.regionId;
        this.derivedPredicate = data?.derivedPredicate;
        this.securityToken = data?.securityToken;
        this.projectId = data?.projectId;
        this.iamEndpoint = data?.iamEndpoint;
        this.derivedAuthServiceName = data?.derivedAuthServiceName;
    }

    public withAk(ak?: string): BasicCredentials {
        this.ak = ak;
        return this;
    }

    public withSk(sk?: string): BasicCredentials {
        this.sk = sk;
        return this;
    }

    public withDerivedPredicate(derivedPredicate?: (httpRequest: IHttpRequest) => boolean): BasicCredentials {
        this.derivedPredicate = derivedPredicate;
        return this;
    }

    public withProjectId(projectId?: string): BasicCredentials {
        this.projectId = projectId;
        return this;
    }

    public withSecurityToken(securityToken?: string): BasicCredentials {
        this.securityToken = securityToken;
        return this;
    }

    public withIamEndpoint(iamEndpoint: string) {
        this.iamEndpoint = iamEndpoint;
        return this;
    }

    public getAk(): string | undefined {
        return this.ak;
    }
    public getSk(): string | undefined {
        return this.sk;
    }

    public getRegionId(): string | undefined {
        return this.regionId;
    }

    public getDerivedAuthServiceName(): string | undefined {
        return this.derivedAuthServiceName;
    }

    public setProjectId(value: string) {
        this.projectId = value;
    }

    public getPathParams() {
        const pathParams = {};
        if (this.projectId) {
            Object.assign(pathParams, { project_id: this.projectId });
        }
        return pathParams;
    }

    public async processAuthRequest(httpRequest: IHttpRequest): Promise<IHttpRequest> {
        if (!this.ak) {
            throw new RequiredError('AK cannot be empty or undefined.');
        }
        if (!this.sk) {
            throw new RequiredError('SK cannot be empty or undefined.');
        } 
        
        const builder = new HttpRequestBuilder();
        builder.addPathParams(this.getPathParams());

        // 替换所有的path参数
        let url = httpRequest.url;
        if (this.projectId) {
            url = this.parsePath(url, this.getPathParams());
            builder.withUrl(url);
        }
        builder.withEndpoint(`${httpRequest.endpoint}${url}`);

        if (this.projectId) {
            builder.addHeaders("X-Project-Id", this.projectId);
        }

        if (this.securityToken) {
            builder.addHeaders("X-Security-Token", this.securityToken);
        }

        if (!isJsonContentType(httpRequest.headers)) {
            builder.addHeaders("X-Sdk-Content-Sha256", "UNSIGNED-PAYLOAD");
        }

        builder.addAllHeaders(httpRequest.headers);
        Object.assign(httpRequest, builder.build());

        const headers = this.isDerivedAuth(httpRequest)
          ? DerivedAKSKSigner.sign(httpRequest, this)
          : AKSKSigner.sign(httpRequest, this);

        builder.addAllHeaders(headers);

        return Object.assign(httpRequest, builder.build());
    }

    public async processAuthParams(hcClient: HcClient, region: string): Promise<ICredential> {
        if (this.projectId) {
            return this;
        }

        const authCacheInstance = AuthCache.instance();
        const akWithName = this.getAk() + region;
        const cachedProjectId = authCacheInstance.getCache(akWithName);
        if (cachedProjectId) {
            this.projectId = cachedProjectId;
            return this;
        }

        const projectId = await new IamService(hcClient, this.iamEndpoint).getProjectId(region);
        authCacheInstance.putCache(akWithName, projectId);
        this.projectId = projectId;
        return this;
    }

    processDerivedAuthParams(derivedAuthServiceName: string, regionId: string | undefined) {
        if (derivedAuthServiceName) {
            this.derivedAuthServiceName = derivedAuthServiceName;
        }
        if (regionId) {
            this.regionId = regionId;
        }
    }

    parsePath(path: string | undefined, params: any): string {
        if (!path || !params) {
            return <string>path;
        }
        return Object.keys(params).reduce((parsedPath, param) => {
            const value = encodeURIComponent(params[param]);
            return parsedPath.replace(new RegExp(`{${param}}`), value);
        }, path);
    }

    isDerivedAuth(httpRequest: IHttpRequest) {
        if (!this.derivedPredicate) {
            return false;
        }
        return this.derivedPredicate(httpRequest);
    }
  
    static getDefaultDerivedPredicate(request: IHttpRequest) {
        const hostname = new URL(request?.endpoint)?.hostname;
        return !BasicCredentials.DEFAULT_ENDPOINT_REG.test(hostname);
    }
}