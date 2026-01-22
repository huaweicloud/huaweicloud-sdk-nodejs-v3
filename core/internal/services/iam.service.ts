/*
 * Copyright 2023 Huawei Technologies Co.,Ltd.
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

import { SdkException } from '../../exception/SdkException';
import { HcClient } from '../../HcClient';
import { KeystoneCreateProjectRequest } from '../model/KeystoneCreateProjectRequest';
import { KeystoneCreateProjectResponse } from '../model/KeystoneCreateProjectResponse';
import { KeystoneListProjectsRequest } from '../model/KeystoneListProjectsRequest';
import { KeystoneListProjectsResponse } from '../model/KeystoneListProjectsResponse';
import { KeystoneListRegionsResponse } from '../model/KeystoneListRegionsResponse';
import { filter, includes } from 'lodash';
import { Region } from '../model/Region';
import { KeystoneListAuthDomainsResponse } from '../model/KeystoneListAuthDomainsResponse';
import { Constants } from '../../utils/constant';
import { CreateUnscopedTokenWithIdTokenResponse } from '../model/CreateUnscopedTokenWithIdTokenResponse';
import { CreateTemporaryAccessKeyByTokenRequest } from '../model/CreateTemporaryAccessKeyByTokenRequest';
import { CreateTemporaryAccessKeyByTokenResponse } from '../model/CreateTemporaryAccessKeyByTokenResponse';
import { CreateTemporaryAccessKeyByTokenRequestBody } from '../model/CreateTemporaryAccessKeyByTokenRequestBody';
import { TokenAuth } from '../model/TokenAuth';
import { TokenAuthIdentity } from '../model/TokenAuthIdentity';
import { Credential } from '../model/Credential';
import { IdentityToken } from '../model/IdentityToken';
import { SignerUtil } from '../../utils/SignerUtil';

export class IamService {
  private static readonly DEFAULT_DURATION_SECONDS: number = 6 * 60 * 60; // 6h
  private client: HcClient;
  constructor(
    hclient: HcClient,
    iamEndpoint?: string,
    notCredential?: boolean
  ) {
    this.client = hclient.overrideEndpoints(
      iamEndpoint ? [iamEndpoint] : [Constants.DEFAULT_IAM_ENDPOINT]
    );
    if (notCredential) {
      this.client.withCredential(undefined);
    }
  }

  async getProjectId(regionId: string): Promise<string> {
    const request = new KeystoneListProjectsRequest();
    request.name = regionId;

    const projectRes = await this.keystoneListProjects(request);
    if (projectRes.projects && projectRes.projects.length == 1) {
      return projectRes.projects[0].id;
    } else {
      return this.getCreateProjectId(regionId);
    }
  }

  async getDomainId(): Promise<string> {
    return this.getAuthDomainId();
  }

  async getUnscopedTokenWithIdToken(
    idToken: string,
    oidc_id: string
  ): Promise<string> {
    let createUnscopedTokenWithIdTokenResponse =
      await this.createUnscopedTokenWithIdToken(idToken, oidc_id);
    createUnscopedTokenWithIdTokenResponse =
      SignerUtil.renameKey<CreateUnscopedTokenWithIdTokenResponse>(
        createUnscopedTokenWithIdTokenResponse,
        'X-Subject-Token',
        'xSubjectToken'
      );
    if (createUnscopedTokenWithIdTokenResponse?.xSubjectToken) {
      return createUnscopedTokenWithIdTokenResponse.xSubjectToken;
    }
    throw new SdkException(
      'Failed to obtain unscoped token, Please check whether the idtoken or idpid parameters are correct.'
    );
  }

  async getTemporaryAccessKeyByToken(
    unscopedToken: string
  ): Promise<Credential> {
    const createTemporaryAccessKeyByTokenRequest =
      new CreateTemporaryAccessKeyByTokenRequest();
    // 构建完整的请求体对象结构
    const identityToken = new IdentityToken().withDurationSeconds(
      IamService.DEFAULT_DURATION_SECONDS
    );
    const tokenAuthIdentity = new TokenAuthIdentity(['token']).withToken(
      identityToken
    );
    const tokenAuth = new TokenAuth(tokenAuthIdentity);
    const requestBody = new CreateTemporaryAccessKeyByTokenRequestBody(
      tokenAuth
    );
    createTemporaryAccessKeyByTokenRequest.withBody(requestBody);
    const createTemporaryAccessKeyByTokenResponse =
      await this.createTemporaryAccessKeyByToken(
        createTemporaryAccessKeyByTokenRequest,
        unscopedToken
      );
    if (createTemporaryAccessKeyByTokenResponse?.credential) {
      return createTemporaryAccessKeyByTokenResponse.credential;
    }
    throw new SdkException(
      'Failed to obtain temporary access key, Please check whether the idtoken or idpid parameters are correct.'
    );
  }

  private async getCreateProjectId(regionId: string): Promise<string> {
    // TODO: 使用 rxjs 库发送多个异步请求
    const supportedRegions = await this.getSupportedRegions();

    if (!supportedRegions || supportedRegions.length <= 0) {
      throw new SdkException('failed to list regions');
    }

    if (!includes(supportedRegions, regionId)) {
      throw new SdkException(
        'the region input is not supported to create project automatically'
      );
    }

    const domainId = await this.getAuthDomainId();

    if (!domainId) {
      throw new SdkException(
        'No domain id found, please select one of the following solutions:\n\t' +
          '1. Manually specify domain_id when initializing the credentials.\n\t' +
          '2. Use the domain account to grant the current account permissions of the IAM service.\n\t' +
          '3. Use AK/SK of the domain account.'
      );
    }

    const createReq = new KeystoneCreateProjectRequest();
    createReq.withBody({
      project: {
        name: regionId,
        domain_id: domainId,
      },
    });
    const createRes = await this.keystoneCreateProject(createReq);
    if (!createRes.project) {
      throw new SdkException('failed to create project');
    }

    return createRes.project!.id;
  }

  private async getSupportedRegions(): Promise<string[]> {
    const publicRegionType = 'public';
    const res = await this.keystoneListRegions();
    if (!res) {
      throw new SdkException('failed to list all regions');
    }

    const ans = filter(res.regions, (item: Region) => {
      return publicRegionType === item.type;
    }).map((item) => {
      return item.id;
    });

    return ans;
  }

  private async getAuthDomainId() {
    const res = await this.keystoneListAuthDomains();

    if (!res || !res.domains || res.domains.length <= 0) {
      throw new SdkException(
        'No domain id found, please select one of the following solutions:\n\t' +
          '1. Manually specify domain_id when initializing the credentials.\n\t' +
          '2. Use the domain account to grant the current account permissions of the IAM service.\n\t' +
          '3. Use AK/SK of the domain account.'
      );
    }

    return res.domains[0].id;
  }

  protected async keystoneListRegions(): Promise<KeystoneListRegionsResponse> {
    const options = {
      method: 'GET',
      url: '/v3/regions',
      contentType: 'application/json',
      queryParams: {},
      pathParams: {},
      headers: {},
      data: {},
    };
    const localVarHeaderParameter = {} as any;
    options.headers = localVarHeaderParameter;
    return await this.client.sendRequest(options);
  }

  async keystoneListProjects(
    keystoneListProjectsRequest?: KeystoneListProjectsRequest
  ): Promise<KeystoneListProjectsResponse> {
    const options = {
      method: 'GET',
      url: '/v3/projects',
      contentType: 'application/json',
      queryParams: {},
      pathParams: {},
      headers: {},
      data: {},
    };
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;
    let domainId;
    let name;
    let parentId;
    let enabled;
    let isDomain;
    let page;
    let perPage;

    if (
      keystoneListProjectsRequest !== null &&
      keystoneListProjectsRequest !== undefined
    ) {
      if (keystoneListProjectsRequest instanceof KeystoneListProjectsRequest) {
        domainId = keystoneListProjectsRequest.domainId;
        name = keystoneListProjectsRequest.name;
        parentId = keystoneListProjectsRequest.parentId;
        enabled = keystoneListProjectsRequest.enabled;
        isDomain = keystoneListProjectsRequest.isDomain;
        page = keystoneListProjectsRequest.page;
        perPage = keystoneListProjectsRequest.perPage;
      } else {
        domainId = keystoneListProjectsRequest['domain_id'];
        name = keystoneListProjectsRequest['name'];
        parentId = keystoneListProjectsRequest['parent_id'];
        enabled = keystoneListProjectsRequest['enabled'];
        isDomain = keystoneListProjectsRequest['is_domain'];
        page = keystoneListProjectsRequest['page'];
        perPage = keystoneListProjectsRequest['per_page'];
      }
    }

    if (domainId !== null && domainId !== undefined) {
      localVarQueryParameter['domain_id'] = domainId;
    }
    if (name !== null && name !== undefined) {
      localVarQueryParameter['name'] = name;
    }
    if (parentId !== null && parentId !== undefined) {
      localVarQueryParameter['parent_id'] = parentId;
    }
    if (enabled !== null && enabled !== undefined) {
      localVarQueryParameter['enabled'] = enabled;
    }
    if (isDomain !== null && isDomain !== undefined) {
      localVarQueryParameter['is_domain'] = isDomain;
    }
    if (page !== null && page !== undefined) {
      localVarQueryParameter['page'] = page;
    }
    if (perPage !== null && perPage !== undefined) {
      localVarQueryParameter['per_page'] = perPage;
    }

    options.queryParams = localVarQueryParameter;
    options.headers = localVarHeaderParameter;

    return await this.client.sendRequest(options);
  }

  private async keystoneCreateProject(
    keystoneCreateProjectRequest?: KeystoneCreateProjectRequest
  ): Promise<KeystoneCreateProjectResponse> {
    const options = {
      method: 'POST',
      url: '/v3/projects',
      contentType: 'application/json;charset=UTF-8',
      queryParams: {},
      pathParams: {},
      headers: {},
      data: {},
    };
    const localVarHeaderParameter = {} as any;

    let body: any;

    if (
      keystoneCreateProjectRequest !== null &&
      keystoneCreateProjectRequest !== undefined
    ) {
      if (
        keystoneCreateProjectRequest instanceof KeystoneCreateProjectRequest
      ) {
        body = keystoneCreateProjectRequest.body;
      } else {
        body = keystoneCreateProjectRequest['body'];
      }
    }

    options.data = body !== undefined ? body : {};
    options.headers = localVarHeaderParameter;
    return await this.client.sendRequest(options);
  }

  private async keystoneListAuthDomains(): Promise<KeystoneListAuthDomainsResponse> {
    const options = {
      method: 'GET',
      url: '/v3/auth/domains',
      contentType: 'application/json',
      queryParams: {},
      pathParams: {},
      headers: {},
      data: {},
    };
    options.headers = {};
    return await this.client.sendRequest(options);
  }

  private async createUnscopedTokenWithIdToken(
    idToken: string,
    oidc_id: string
  ): Promise<CreateUnscopedTokenWithIdTokenResponse> {
    const options = {
      method: 'POST',
      url: `v3/OS-FEDERATION/identity_providers/${oidc_id}/protocols/oidc/auth`,
      contentType: 'application/json',
      queryParams: {},
      pathParams: {},
      headers: {
        Authorization: `Bearer ${idToken}`,
        Accep: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {},
      responseHeaders: ['X-Subject-Token'],
    };

    return await this.client.sendRequest(options);
  }

  private async createTemporaryAccessKeyByToken(
    createTemporaryAccessKeyByTokenRequest: CreateTemporaryAccessKeyByTokenRequest,
    unscopedToken: string
  ): Promise<CreateTemporaryAccessKeyByTokenResponse> {
    const options = {
      method: 'POST',
      url: 'v3.0/OS-CREDENTIAL/securitytokens',
      contentType: 'application/json',
      queryParams: {},
      pathParams: {},
      headers: {
        'x-auth-token': unscopedToken,
        'Content-Type': 'application/json',
      },
      data: {},
    };

    let body: any;

    if (
      createTemporaryAccessKeyByTokenRequest !== null &&
      createTemporaryAccessKeyByTokenRequest !== undefined
    ) {
      if (
        createTemporaryAccessKeyByTokenRequest instanceof
        CreateTemporaryAccessKeyByTokenRequest
      ) {
        body = createTemporaryAccessKeyByTokenRequest.body;
      }
    }

    options.data = body !== undefined ? body : {};

    try {
      return await this.client.sendRequest(options);
    } catch (error) {
      throw new SdkException(`Failed to create temporary access key: ${error}`);
    }
  }
}
