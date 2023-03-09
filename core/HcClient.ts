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

import { HttpClient } from "./http/HttpClient";
import { ICredential } from "./auth/ICredential";
import { IHttpRequest } from "./http/IHttpRequest";
import { HttpRequestBuilder } from "./http/IHttpRequestBuilder";
import { SdkResponse } from "./SdkResponse";
import { ExceptionUtil } from "./exception/ExceptionUtil";
import { getLogger, Logger, LogLevel } from './logger';
import { DefaultHttpResponse } from "./http/DefaultHttpResponse";
import { Region } from "./region/region";
import { SdkStreamResponse } from "./SdkStreamResponse";
import { ClientOptions, DefaultHttpClient } from "./http/DefaultHttpClient";

export interface HttpRequestOptions {
    method: string;
    url: string;
    contentType: string;
    queryParams: Record<string, any>;
    pathParams: Record<string, any>;
    headers: Record<string, string>;
    data: Record<string, any>;
}

export class HcClient {
    private httpClient: HttpClient;
    private credential?: ICredential;
    private proxyAgent = '';
    private static loggerName = 'HcClient';
    private logger: Logger;
    private region?: Region;
    private clientOptions?: ClientOptions;
    private endpoints?: string[];

    constructor(client: HttpClient, clientOptions?: ClientOptions) {
        this.httpClient = client;

        // Logging
        this.logger = getLogger(HcClient.loggerName, LogLevel.INFO);
        this.logger.debug('initialized');

        this.clientOptions = clientOptions;
    }

    public withEndpoints(endpoints?: string[]) {
        this.endpoints = endpoints;
        return this;
    }
    public withCredential(credential?: ICredential): HcClient {
        this.credential = credential;
        return this;
    }

    public withRegion(region?: Region): HcClient {
        this.region = region;
        return this;
    }

    public withHttpsAgent(proxyAgent: string): HcClient {
        this.proxyAgent = proxyAgent;
        return this;
    }

    public overrideEndpoints(endpoint?: string[]): HcClient {
        const client = new DefaultHttpClient(this.clientOptions, endpoint);
        return new HcClient(client, this.clientOptions).withCredential(this.credential).withEndpoints(endpoint);
    }

    public async sendRequest<T extends SdkResponse>(options: HttpRequestOptions): Promise<T> {
        this.logger.debug('send request');
        this.httpClient.credentials = this.credential;
        const request = await this.buildRequest(options);

        this.httpClient.httpRequest = request;

        try {
            const response = await this.httpClient.sendRequest<T>(request);
            return this.extractResponse(response);
        } catch (error: any) {
            throw ExceptionUtil.generalException(error);
        }
    }

    private async buildRequest(options: any): Promise<IHttpRequest> {
        if (this.region) {
            this.credential = await this.credential!.processAuthParams(this, this.region.id);
        }

        let url = `${options.url}`;
        Object.entries(options.pathParams).forEach(([key, value]) => {
            url = url.replace(`{${key}}`, value + '');
        });

        if (options.method === 'DELETE'
            && (options.data && (Object.keys(options.data).length <= 0 || options.data.length <= 0))) {
            delete options.data;
        }

        if (options.headers?.['Content-Type']) {
            delete options.headers['Content-Type'];
        }

        if (options.contentType) {
            if (!options.headers) {
                options.headers = {};
            }
            options.headers['content-type'] = options.contentType.toLowerCase().includes('application/json')
                ? 'application/json'
                : options.contentType;
        }

        const builder = new HttpRequestBuilder();
        let httpRequest = builder
            .withEndpoint(this.endpoints![0])
            .withUrl(url)
            .withHeaders(options.headers)
            .withMethod(options.method)
            .withPathParams(options.pathParams)
            .withData(options.data)
            .withQueryParams(options.queryParams)
            .build();

        httpRequest = this.credential!.processAuthRequest(httpRequest);
        if (options['responseHeaders']) {
            httpRequest['responseHeaders'] = options['responseHeaders'];
        }
        httpRequest.proxy = this.proxyAgent;
        if (options.axiosRequestConfig) {
            httpRequest.axiosRequestConfig = options.axiosRequestConfig;
        }

        return httpRequest;
    }

    private extractResponse<T extends SdkResponse>(result: DefaultHttpResponse<T>): T {
        const headers = result.headers;
        const contentType = headers['content-type']?.toLowerCase();
        if (/(application\/octet-stream|image|application\/zip)/.test(contentType)) {
            const streamRes = new SdkStreamResponse();
            streamRes.body = result.data;
            streamRes.httpStatusCode = result.statusCode;
            return streamRes as T;
        }

        const response = typeof result.data === 'object' ? result.data : {} as T;
        response.httpStatusCode = result.statusCode;
        return response;
    }
}