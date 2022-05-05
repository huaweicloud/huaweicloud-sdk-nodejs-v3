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

import { HttpClient } from "./http/HttpClient";
import { ICredential } from "./auth/ICredential";
import { IHttpRequest } from "./http/IHttpRequest";
import { HttpRequestBuilder } from "./http/IHttpRequestBuilder";
import { SdkResponse } from "./SdkResponse";
import { ExceptionUtil } from "./exception/ExceptionUtil";
import { getLogger, Logger, LogLevel } from './logger';
import { DefaultHttpResponse } from "./http/DefaultHttpResponse";
import { Region } from "./region/region";

export class HcClient {
    private httpClient: HttpClient;
    private endpoint: string | undefined;
    private credential: ICredential | undefined;
    private proxyAgent: string = '';
    private static loggerName = 'HcClient';
    private logger: Logger;
    region?: Region;

    public constructor(client: HttpClient) {
        this.httpClient = client;

        // Logging
        this.logger = getLogger(HcClient.loggerName, LogLevel.INFO);
        this.logger.debug('initialized');
    }

    public withEndpoint(endpoint?: string): HcClient {
        this.endpoint = endpoint;
        return this;
    }

    public withCredential(credential?: ICredential): HcClient {
        this.credential = credential;
        return this;
    }

    public withRegion(region?: Region) {
        this.region = region;
        return this;
    }

    public withHttpsAgent(proxyAgent: string) {
        this.proxyAgent = proxyAgent;
        return this;
    }
    public async sendRequest<T extends SdkResponse>(options: any): Promise<any> {
        this.logger.debug('send request');

        const request = await this.buildRequest(options);
        // @ts-ignore
        return this.httpClient.sendRequest<T>(request).then(res => {
            return this.extractResponse<T>(res);
        }, err => {
            return ExceptionUtil.generalException(err);
        });
    }

    private async buildRequest(options: any): Promise<IHttpRequest> {
        if (this.region) {
            this.endpoint = this.region.endpoint;
            this.credential = await this.credential!.processAuthParams(this, this.region.id);
        }

        let url = this.endpoint + options.url;
        const pathParams = options.pathParams;
        Object.keys(pathParams).forEach(x => {
            url = url.replace("{" + x + "}", pathParams[x]);
        });

        const builder = new HttpRequestBuilder();
        let httpRequest = builder
            .withEndpoint(url)
            .withHeaders(options.headers)
            .withMethod(options.method)
            .withPathParams(options.pathParams)
            .withData(options.data)
            .withQueryParams(options.queryParams)
            .build();

        // @ts-ignore
        httpRequest = this.credential.processAuthRequest(httpRequest);
        if (options['responseHeaders']) {
            httpRequest['responseHeaders'] = options['responseHeaders'];
        }
        httpRequest.proxy = this.proxyAgent;
        return httpRequest;
    }

    private extractResponse<T extends SdkResponse>(result: DefaultHttpResponse<T>): T {
        const headers = result.headers;
        let contentType = headers['content-type'];
        contentType = contentType.toLowerCase();
        if (contentType && (contentType.startsWith('application/octet-stream') || contentType.startsWith("image"))) {
            return result.data as T;
        } else {
            let response = result.data instanceof Object ? result.data : {} as T;
            let sdkRespone = response as SdkResponse;
            sdkRespone.httpStatusCode = result.statusCode;

            return response;
        }
    }
}