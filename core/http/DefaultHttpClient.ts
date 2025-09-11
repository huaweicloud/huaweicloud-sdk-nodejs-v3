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

import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance, Method } from 'axios';
import { IHttpRequest } from './IHttpRequest';
import { stringify as qsStringify } from 'querystring';
import { HttpClient } from './HttpClient';
import HttpsProxyAgent from 'https-proxy-agent';
import { Logger, LogLevel, getLogger } from '../logger';
import { DefaultHttpResponse } from './DefaultHttpResponse';
import { ExceptionResponse } from '../exception/ExceptionResponse';
import { SdkResponse } from '../SdkResponse';
import { SdkException } from '../exception/SdkException';
import { AKSKSigner } from '../auth/AKSKSigner';
import { ICredential } from '../auth/ICredential';

export class DefaultHttpClient implements HttpClient {
    private endpoints: string[];
    credentials?: ICredential;
    httpRequest?: IHttpRequest;
    private _axiosInstance: AxiosInstance;
    private _logger: Logger;
    private _defaultOptions: ClientOptions;
    private readonly maxRetryCount = 1;
    private retryCount = 0;
    public static httpReqParam: any;
    public static httpResponse: any;
    private readonly _DEFAULT_HEADERS = {
        Accept: 'application/json',
        'content-type': 'application/json',
    };

    public constructor(options: ClientOptions = {}, endpoints?: string[]) {
        if (!endpoints) {
            throw new SdkException('Endpoints cannot be empty.');
        }

        this.endpoints = endpoints;
        this._defaultOptions = options || {};
        this._logger = options.logger || getLogger(DefaultHttpClient.name, options.logLevel || LogLevel.ERROR);
        this._axiosInstance = this._createAxiosInstance();

        this._logger.debug('Initialized');
    }

    public async sendRequest<T extends SdkResponse>(httpRequest: IHttpRequest): Promise<DefaultHttpResponse<T>> {
        try {
            this.retryCount = 0;
            const axiosResponse = await this._sendHttpRequest(httpRequest);
            DefaultHttpClient.httpResponse = axiosResponse;
            const httpResponse = this._formatHttpResponse<T>(httpRequest, axiosResponse);
            return httpResponse;
        } catch (error: any) {
            const exceptionResponse = this._formatExceptionResponse(error);
            this._logger.error('Some error found:', exceptionResponse);
            throw exceptionResponse;
        }
    }

    private _createAxiosInstance(): AxiosInstance {
        const proxyAgent = this._defaultOptions.proxy ? HttpsProxyAgent(this._defaultOptions.proxy) : undefined;
        const axiosRequestConfig: AxiosRequestConfig = {
            maxContentLength: Infinity,
            headers: Object.assign(this._DEFAULT_HEADERS, this._defaultOptions.headers),
            proxy: false,
            httpAgent: proxyAgent,
            httpsAgent: proxyAgent,
        };

        if (this._defaultOptions.axiosRequestConfig) {
            Object.assign(axiosRequestConfig, this._defaultOptions.axiosRequestConfig);
        }

        const axiosInstance = axios.create(axiosRequestConfig);
        axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
            const { url, method, data, headers } = request;
            this._logger.debug(`Request: ${method!.toUpperCase()} ${url} ${JSON.stringify(headers)} ${JSON.stringify(data)}`);
            return request;
        });

        this.addInterceptorsToAxiosInstance(axiosInstance);

        delete axiosInstance.defaults.headers.post['Content-Type'];
        delete axiosInstance.defaults.headers.put['Content-Type'];

        return axiosInstance;
    }

    private addInterceptorsToAxiosInstance(axiosInstance: AxiosInstance) {
        axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                this.buildResLog(response);
                return response;
            },
            async (error: AxiosError) => {
                // Check whether the error code is 'ECONNABORTED' or 'ECONNREFUSED'
                if (error.code === 'ECONNABORTED' ||
                    error.code === 'ECONNREFUSED' ||
                    error.code === 'ECONNRESET' ||
                    (error.response && error.response.status === 504)) {
                    if (this.retryCount >= this.maxRetryCount) {
                        return Promise.reject(error);
                    }

                    if (this.endpoints.length < 2) {
                        return Promise.reject(error);
                    }

                    this.retryCount++;

                    // Backup URL
                    const backupUrl = this.endpoints[1];
                    // Set the baseURL of the request to the backup URL
                    error.config.baseURL = backupUrl;
                    error.config.headers['host'] = error.config.baseURL.replace(/^https?:\/\/(.*?)\/?$/, '$1');
                    reSigner(error.config, this.credentials, this.httpRequest);
                    try {
                        // Send the request again
                        const response = await axiosInstance.request(error.config);
                        // If the request succeeds, reverse the order of the 'endpoints' array
                        this.endpoints = this.endpoints.reverse();

                        return response;
                    } catch (err) {
                        // If the request fails, reject the entire request
                        return Promise.reject(err);
                    }
                }
                // If the error code is not 'ECONNABORTED' or 'ECONNREFUSED', pass the error down
                return Promise.reject(error);
            }
        );
    }

    private buildResLog(response: AxiosResponse<any>) {
        const {
            config: { url, method },
            status,
            statusText,
            headers,
        } = response;
        const statusStr = `${status ?? ''}${statusText ? `:${statusText}` : ''} `;
        const requestId = headers['x-request-id'];
        const responseLength = response.data ? JSON.stringify(response.data).length : 0;
        this._logger.debug(`Response: ${method?.toUpperCase()} ${statusStr} ${url} ${JSON.stringify(headers)} ${responseLength} ${requestId}`);
    }

    private async _sendHttpRequest(httpRequest: IHttpRequest): Promise<AxiosResponse> {
        let { url, queryParams, method, data, headers } = httpRequest;
        headers = headers || {};
        url = stripTrailingSlash(url);

        addUserAgentHeader(headers, this._defaultOptions.headers?.['User-Agent']);

        const requestParams: AxiosRequestConfig = {
            url,
            method: method as Method,
            headers,
            params: queryParams,
            data,
            paramsSerializer: {
                serialize: (params: any) => {
                    return qsStringify(params);
                },
            },
        };

        if (httpRequest.axiosRequestConfig) {
            Object.assign(requestParams, httpRequest.axiosRequestConfig);
        }

        if (headers['content-type'] === 'multipart/form-data') {
            const { 'content-type': contentType } = data.getHeaders();
            requestParams.headers = { ...requestParams.headers, 'content-type': contentType };
        }
        // set axios config baseURL
        const primaryUrl = this.endpoints[0];
        requestParams.baseURL = primaryUrl;

        DefaultHttpClient.httpReqParam = requestParams;

        return this._axiosInstance(requestParams);
    }

    private _formatHttpResponse<T>(httpRequest: IHttpRequest, axiosResponse: AxiosResponse): DefaultHttpResponse<T> {
        if (httpRequest['responseHeaders'] && axiosResponse.data) {
            const responseHeaders = httpRequest['responseHeaders'];
            for (const item of responseHeaders) {
                const lowerItem = item.toString().toLowerCase();
                if (!axiosResponse.data[item] && axiosResponse.headers[lowerItem]) {
                    axiosResponse.data[item] = axiosResponse.headers[lowerItem];
                }
            }
        }
        return {
            data: axiosResponse.data as T,
            statusCode: axiosResponse.status,
            headers: axiosResponse.headers,
        };
    }

    private _formatExceptionResponse(error: AxiosError): ExceptionResponse {
        const transformedResponse: ExceptionResponse = {
            data: error.response ? error.response.data : undefined,
            status: error.response ? error.response.status : undefined,
            headers: error.response ? error.response.headers : undefined,
            message: error.message || error.code,
            requestId: error.response?.headers['x-request-id'],
        };
        if (error.isAxiosError) {
            transformedResponse.config = error.config;
        }
        return transformedResponse;
    }
}

function addUserAgentHeader(headers: any, customUserAgent?: string): void {
    if (!headers) {
        return;
    }

    const prefix = 'huaweicloud-usdk-nodejs/3.0';
    if (customUserAgent && typeof customUserAgent === 'string') {
        headers['User-Agent'] = customUserAgent;
    } else {
        headers['User-Agent'] = prefix;
    }
}

function stripTrailingSlash(url?: string): string {
    if (typeof url !== 'string' || url.trim() === '') {
        throw new Error('Invalid URL');
    }
    return url.replace(/\/$/, '');
}

export interface ClientOptions {
    disableSslVerification?: boolean;
    proxy?: string;
    headers?: any;
    logger?: Logger;
    logLevel?: LogLevel;
    axiosRequestConfig?: AxiosRequestConfig;
}

function reSigner(config: AxiosRequestConfig, credential?: ICredential, httpRequest?: IHttpRequest) {
    if (!credential || !httpRequest) {
        return;
    }
    httpRequest.endpoint = `${config.baseURL}${config.url}`;

    const headerProperties = Object.entries(config.headers || {}).reduce((acc: { [key: string]: string }, [key, value]) => {
        if (key === 'X-Project-Id' || key === 'X-Domain-Id') {
            acc[key] = value as string;
        }
        return acc;
    }, {});

    httpRequest.headers = {
        ...httpRequest.headers,
        ...headerProperties,
        ...(config.headers && {
            'content-type': config.headers['Content-Type'],
        }),
    };

    delete httpRequest.headers['Authorization'];
    delete httpRequest.headers['user-agent'];
    httpRequest.headers['host'] = config.baseURL?.replace(/^https?:\/\/(.*?)\/?$/, '$1');
    const headers = AKSKSigner.sign(httpRequest, credential);
    config.headers = headers;
}
