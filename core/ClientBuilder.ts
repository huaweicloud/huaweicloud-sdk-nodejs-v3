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

import { HcClient } from "./HcClient";
import { ICredential } from "./auth/ICredential";
import { ClientOptions, DefaultHttpClient } from "./http/DefaultHttpClient";
import { BasicCredentials } from "./auth/BasicCredentials";
import { GlobalCredentials } from "./auth/GlobalCredentials";
import { SdkException } from "./exception/SdkException";
import { Region } from "./region/region";
import { UserOptions } from "./UserOptions";
import { LoggerOptions } from "./logger";
import * as path from "path";

interface CredParams {
    ak?: string;
    sk?: string,
    project_id?: string,
    domain_id?: string,
    [key: string]: any;
}

export class ClientBuilder<T> {
    private init: Function;
    private endpoints?: string[];
    private credential?: ICredential;
    private proxyAgent?: string;
    private credentialType: string[] = ["BasicCredentials", "GlobalCredentials"];
    private envParams: CredParams = process.env;
    private region?: Region;
    private userOptions?: UserOptions;
    private loggerOptions?: LoggerOptions;
    private credentials: { [key: string]: ICredential } = {};

    public constructor(init: (hcClient: HcClient) => T, credentialType?: string) {
        this.init = init;
        if (credentialType) {
            this.credentialType = credentialType.split(",");
        }
    }

    public withEndpoint(endpoint: string | string[]): ClientBuilder<T> {
        this.endpoints = [];
        if (typeof endpoint === 'string') {
            this.endpoints.push(endpoint);
        } else if (Array.isArray(endpoint)) {
            this.endpoints.push(...endpoint);
        }
        return this;
    }

    public withCredential(credential?: ICredential): ClientBuilder<T> {
        this.credential = credential;
        return this;
    }

    public withProxyAgent(proxyAgent: string): ClientBuilder<T> {
        this.proxyAgent = proxyAgent;
        return this;
    }

    public withRegion(region: Region): ClientBuilder<T> {
        this.region = region;
        return this;
    }

    public withOptions(options: UserOptions): ClientBuilder<T> {
        this.userOptions = options;
        return this;
    }

    public withLogger(loggerOptions: LoggerOptions): ClientBuilder<T> {
        this.loggerOptions = loggerOptions;
        return this;
    }

    public build(): T {
        const axiosOptions: ClientOptions = {
            disableSslVerification: true
        };
        if (this.proxyAgent) {
            Object.assign(axiosOptions, { proxy: this.proxyAgent });
        }
        if (this.userOptions?.customUserAgent) {
            axiosOptions.headers = axiosOptions.headers || {};
            axiosOptions.headers["User-Agent"] = this.userOptions.customUserAgent;
        }

        if (this.userOptions?.axiosRequestConfig) {
            axiosOptions.axiosRequestConfig = this.userOptions.axiosRequestConfig;
        }

        if (this.loggerOptions?.logger) {
            axiosOptions.logger = this.loggerOptions.logger;
        }

        if (this.loggerOptions?.logLevel) {
            axiosOptions.logLevel = this.loggerOptions.logLevel;
        }

        if (!this.credential) {
            this.credential = this.getCredentialFromEnvironment();
        }

        if (!this.credential) {
            throw new SdkException(`credential can not be null, ${this.credentialType}Credential objects are required`);
        }

        if (this.region) {
            this.endpoints = this.region.endpoints;
        }
        const client = new DefaultHttpClient(axiosOptions, this.endpoints);
        const hcClient = new HcClient(client);

        this.region && hcClient.withRegion(this.region);

        hcClient.withCredential(this.credential).withEndpoints(this.endpoints);
        return this.init(hcClient);
    }

    /**
     * Get 'HUAWEICLOUD_SDK_TYPE' from environment variables
     * If the variable does not exist, use the first credential type
     * Generate credential entity
     * Assign AK, SK, projectId/domainId from the environment variables
     * If the environment variable is 'GlobalCredentials', assign the domainId
     * @returns ICredential
     */
    private getCredentialFromEnvironment(): ICredential {
        const sdkType: any = process.env.HUAWEICLOUD_SDK_TYPE;
        const credentialTYPE = this.whichCredential(sdkType)
        return this.getInputParamCredential(credentialTYPE, this.envParams);
    }

    private whichCredential(sdkType: string) {
        if (!sdkType) {
            return new BasicCredentials();
        }

        switch (sdkType) {
            case 'BasicCredentials': {
                return new BasicCredentials();
            }
            case 'GlobalCredentials': {
                return new GlobalCredentials();
            }
            default: {
                if (this.credentials[sdkType]) {
                    return this.credentials[sdkType];
                }

                const definedCredPath = path.join(this.init().getPath(), `${sdkType}`);
                const credentialTYPE = require(definedCredPath);
                this.credentials[sdkType] = new credentialTYPE();
                return this.credentials[sdkType];
            }
        }
    }

    private getInputParamCredential(CredentialsType: any, credential: CredParams) {
        const hash = Object.keys(credential)
            .filter(key => key.indexOf("HUAWEICLOUD_SDK_") === 0)
            .reduce((acc: { [key: string]: string }, key) => {
                let newKey = key.substring(16);
                if (newKey.indexOf('_') === -1) {
                    newKey = `with${newKey.toLowerCase().replace(/^\w/, c => c.toUpperCase())}`;
                } else {
                    newKey = newKey.split('_').map(word => `${word.toLowerCase().replace(/^\w/, c => c.toUpperCase())}`).join('');
                    newKey = `with${newKey}`;
                }
                acc[newKey] = credential[key];
                return acc;
            }, {});

        Object.keys(hash).forEach((key: string) => {
            if (CredentialsType[key]) {
                CredentialsType[key](hash[key]);
            }
        });

        return CredentialsType;
    }
}