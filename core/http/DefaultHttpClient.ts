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

import axios, { AxiosResponse, AxiosError } from 'axios';
import { IHttpRequest } from './IHttpRequest';
import { stringify as qsStringify } from 'querystring';
import { HttpClient } from './HttpClient';
import HttpsProxyAgent = require('https-proxy-agent');
import { Logger, LogLevel, getLogger } from '../logger';
import { DefaultHttpResponse } from './DefaultHttpResponse';
import { ExceptionResponse } from '../exception/ExceptionResponse';

export class DefaultHttpClient implements HttpClient {
    private axiosInstance: any;
    public static httpReqParam: any;
    public static httpResponse: any;
    private static loggerName = "DefaultHttpClient";
    private logger: Logger;
    private defaultOption: ClientOptions;

    // A request header consists of its case-insensitive name followed by a colon ':'
    // from: https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers
    private DEFAULT_HEADERS =
        {
            Accept: 'application/json',
            'content-type': 'application/json'
        };

    public constructor(options: ClientOptions = {}) {
        this.defaultOption = options;

        // Logging
        if (typeof options.logger !== 'undefined') {
            this.logger = options.logger;
            if (typeof options.logLevel !== 'undefined') {
                this.logger.debug('The logLevel given to client was ignored as you also gave logger');
            }
        } else {
            this.logger = getLogger(DefaultHttpClient.loggerName, options.logLevel || LogLevel.ERROR, options.logger);
        }

        this.init();
    }

    private init() {
        // proxy
        let proxyAgent;
        if (this.defaultOption.proxy && this.defaultOption.proxy !== '') {
            proxyAgent = HttpsProxyAgent(this.defaultOption.proxy);
        }

        this.axiosInstance = axios.create({
            maxContentLength: Infinity,
            headers: Object.assign(
                this.DEFAULT_HEADERS,
                this.defaultOption.headers
            ),
            proxy: false,
            httpAgent: proxyAgent,
            httpsAgent: proxyAgent
        });

        this.axiosInstance.interceptors.request.use((request: any) => {
            const { url, method, data, headers } = request;

            this.logger.debug(`Request: ${method.toUpperCase()} ${url} ${JSON.stringify(headers)} ${JSON.stringify(data)}`);

            return request;
        });

        this.axiosInstance.interceptors.response.use((response: any) => {
            const { config: { url, method }, status, statusText, headers } = response;
            let statusStr = '';
            if (status && statusText) {
                statusStr += `${status}:${statusText} `;
            }
            else if (status) {
                statusStr += `${status} `;
            } else if (statusText) {
                statusStr += `${statusText} `;
            }

            let requestId = response.headers ? response.headers['x-request-id'] : undefined;
            let reponseLength = response.result ? JSON.stringify(response.result).length : 1;

            this.logger.debug(`Response: ${method.toUpperCase()} ${statusStr} ${url} ${JSON.stringify(headers)} ${reponseLength} ${requestId}`);

            return response;
        });

        delete this.axiosInstance.defaults.headers.post['Content-Type'];
        delete this.axiosInstance.defaults.headers.put['Content-Type'];
        this.logger.debug('initialized');
    }

    public sendRequest<T = any>(httpRequest: IHttpRequest): Promise<DefaultHttpResponse<T>> {
        return this._request(httpRequest).then(res => {
            DefaultHttpClient.httpResponse = res;

            const result = this._convertResponse<T>(httpRequest, res);

            return {
                data: result instanceof String ? undefined : result,
                statusCode: res.status,
                headers: res.headers
            };
        }).catch((err) => {
            // TODO:
            DefaultHttpClient.httpResponse = err;
            const errorRespone = this.formatError(err);
            this.logger.error('some error found:', errorRespone);

            throw errorRespone;
        });
    }

    private async _request(httpRequest: IHttpRequest): Promise<AxiosResponse> {
        let { endpoint, queryParams, method, data, headers } = httpRequest;
        headers = headers || {};
        this.logger.debug(`send request start: ${endpoint} `);

        let url = endpoint;
        url = stripTrailingSlash(url);

        if (this.defaultOption.headers) {
            const customUserAgent = this.defaultOption.headers['User-Agent'];
            if (customUserAgent) {
                headers['User-Agent'] = ["huaweicloud-usdk-nodejs/3.0",customUserAgent].join(" ");
            } else {
                headers['User-Agent'] = "huaweicloud-usdk-nodejs/3.0"
            }
        }

        let requestParams = {
            url,
            method,
            headers,
            params: queryParams,
            data,
            paramsSerializer: (params: any) => {
                return qsStringify(params);
            },
        };
        const methods: string[] = ['PUT', 'POST', 'PATCH', 'DELETE'];
        if (method && methods.indexOf(method.toUpperCase()) !== -1) {
            requestParams = Object.assign(requestParams, {
                transformRequest: [this.transformOptions.bind(this)]
            })
        }
        // TODO
        DefaultHttpClient.httpReqParam = requestParams;

        const res: AxiosResponse = await this.axiosInstance(requestParams);

        return res;
    }

    private _convertResponse<T = any>(httpRequest: IHttpRequest, axiosResult: AxiosResponse) {
        if (httpRequest['responseHeaders'] && axiosResult.data) {
            const responseHeaders = httpRequest['responseHeaders'];
            for (let item of responseHeaders) {
                let lowerItem = item.toString().toLowerCase();
                if (!axiosResult.data[item] && axiosResult.headers[lowerItem]) {
                    axiosResult.data[item] = axiosResult.headers[lowerItem];
                }
            }
        }
        return axiosResult.data as T;
    }

    public transformOptions(data: any, headers: any) {
        if (headers['content-type'] === 'multipart/form-data') {
            // data is form-data object
            for (const [header, value] of Object.entries(data.getHeaders())) {
                headers[header] = value;
            }
            return data;
        }

        headers['content-type'] = 'application/json';
        return JSON.stringify(data);
    }

    private formatError(error: AxiosError): ExceptionResponse {
        let transformedResponse = {
            data: error.response ? error.response.data : undefined,
            status: error.response ? error.response.status : undefined,
            headers: error.response ? error.response.headers : undefined,
            message: error.message || undefined,  
            requestId: error.response?.headers['x-request-id']
        }
        return transformedResponse;
    }
}

function stripTrailingSlash(url: string | undefined): string {
    // Match a forward slash / at the end of the string ($)
    // @ts-ignore
    return url.replace(/\/$/, '');
}

export interface ClientOptions {
    disableSslVerification?: boolean,
    proxy?: string,
    headers?: any,
    logger?: Logger,
    logLevel?: LogLevel;
}
