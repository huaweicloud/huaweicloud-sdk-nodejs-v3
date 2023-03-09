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

export class GlobalCredentials implements ICredential {
    ak?: string;
    sk?: string;
    securityToken: string | undefined;
    domainId: string | undefined;
    iamEndpoint?: string;

    constructor(data: Partial<GlobalCredentials> = {}) {
        this.ak = data?.ak;
        this.sk = data?.sk;
        this.securityToken = data?.securityToken;
        this.domainId = data?.domainId;
        this.iamEndpoint = data?.iamEndpoint;
    }

    public withAk(ak: string | undefined): GlobalCredentials {
        this.ak = ak;
        return this;
    }

    public withSk(sk: string | undefined): GlobalCredentials {
        this.sk = sk;
        return this;
    }

    public withDomainId(domainId: string | undefined): GlobalCredentials {
        this.domainId = domainId;
        return this;
    }

    public withSecurityToken(securityToken: string | undefined): GlobalCredentials {
        this.securityToken = securityToken;
        return this;
    }

    public withIamEndpoint(iamEndpoint: string) {
        this.iamEndpoint = iamEndpoint;
        return this;
    }

    public getAk(): string {
        if (!this.ak) {
            throw new RequiredError('AK cannot be empty or undefined.');
        }

        return this.ak;
    }
    public getSk(): string {
        if (!this.sk) {
            throw new RequiredError('SK cannot be empty or undefined.');
        }
        return this.sk;
    }

    public setDomainId(value: string) {
        this.domainId = value;
    }

    public getPathParams() {
        const pathParams = {};
        if (this.domainId) {
            Object.assign(pathParams, { domain_id: this.domainId });
        }
        return pathParams;
    }
    public processAuthRequest(httpRequest: IHttpRequest): IHttpRequest {
        if (!this.ak) {
            throw new RequiredError('AK cannot be empty or undefined.');
        }

        if (!this.sk) {
            throw new RequiredError('SK cannot be empty or undefined.');
        }

        const builder = new HttpRequestBuilder()
            .addPathParams(this.getPathParams());

        // 替换所有的path参数
        let url = httpRequest.url;
        if (this.domainId) {
            url = parsePath(url, this.getPathParams());
            builder.withUrl(url)
                .addHeaders("X-Domain-Id", this.domainId);
        }
        builder.withEndpoint(`${httpRequest.endpoint}${url}`);

        if (this.securityToken) {
            builder.addHeaders("X-Security-Token", this.securityToken);
        }

        if (!isJsonContentType(httpRequest.headers)) {
            builder.addHeaders("X-Sdk-Content-Sha256", "UNSIGNED-PAYLOAD");
        }

        builder.addAllHeaders(httpRequest.headers);
        Object.assign(httpRequest, builder.build());
        const headers = AKSKSigner.sign(httpRequest, this);

        builder.addAllHeaders(headers);

        return Object.assign(httpRequest, builder.build());
    }

    public async processAuthParams(hcClient: HcClient): Promise<this> {
        if (this.domainId) {
            return this;
        }

        const authCacheInstance = AuthCache.instance();
        const akWithName = this.getAk();
        if (authCacheInstance.getCache(akWithName)) {
            this.domainId = authCacheInstance.getCache(akWithName);
            return this;
        }

        const domainId = await new IamService(hcClient, this.iamEndpoint).getDomainId();
        authCacheInstance.putCache(akWithName, domainId);
        this.domainId = domainId;

        return this;
    }
}

function parsePath(path: string | undefined, params: Record<string, any>): string {
    if (!path || !params) {
        return path || "";
    }

    const replacePathParam = (parsedPath: string, [param, value]: [string, any]): string => {
        const encodedValue = encodeURIComponent(value);
        return parsedPath.replace(new RegExp(`{${param}}`, "g"), encodedValue);
    };

    return Object.entries(params).reduce(replacePathParam, path);
}