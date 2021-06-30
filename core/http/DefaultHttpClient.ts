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

import axios from 'axios';
import { IHttpRequest } from './IHttpRequest';
import { stringify as qsStringify } from 'querystring';
import { HttpClient } from './HttpClient';
import HttpsProxyAgent = require('https-proxy-agent');
import { Logger, LogLevel, getLogger } from '../logger'; 


export class DefaultHttpClient implements HttpClient {
    private axiosInstance: any;
    public static httpReqParam: any;
    public static httpResponse: any;
    private static loggerName = "DefaultHttpClient";
    private logger: Logger;

    // A request header consists of its case-insensitive name followed by a colon ':'
    // from: https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Headers
    private DEFAULT_HEADERS =
        {
            Accept: 'application/json',
            'content-type': 'application/json'
        };

    public constructor({
        proxy = '',
        logger = undefined,
        logLevel = LogLevel.INFO,
        headers = {}
    }: ClientOptions) {

        // proxy
        let proxyAgent;
        if (proxy && proxy !== '') {
            proxyAgent = HttpsProxyAgent(proxy);
        }

        // Logging
        if (typeof logger !== 'undefined') {
            this.logger = logger;
            if (typeof logLevel !== 'undefined') {
                this.logger.debug('The logLevel given to client was ignored as you also gave logger');
            }
        } else {
            this.logger = getLogger(DefaultHttpClient.loggerName, logLevel, logger);
        }

        this.axiosInstance = axios.create({
            maxContentLength: Infinity,
            headers: Object.assign(
                this.DEFAULT_HEADERS,
                headers
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
            const { config: { url, method }, status, statusText, data, headers } = response;
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

            this.logger.debug(`Response: ${method.toUpperCase()} ${statusStr} ${url} ${JSON.stringify(headers)} ${JSON.stringify(data)} ${reponseLength} ${requestId}`);

            return response;
        });

        delete this.axiosInstance.defaults.headers.post['Content-Type'];
        delete this.axiosInstance.defaults.headers.put['Content-Type'];
        this.logger.debug('initialized');
    }

    public sendRequest(httpRequest: IHttpRequest): Promise<any> {
        let { endpoint, queryParams, method, data, headers } = httpRequest;
        headers = headers || {};
        this.logger.debug(`send request start: ${endpoint} `);

        // Path params
        let url = endpoint;//parsePath(endpoint, pathParams);
        url = stripTrailingSlash(url);
        headers['User-Agent'] = "huaweicloud-usdk-nodejs/3.0";
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
        DefaultHttpClient.httpReqParam = requestParams;
        return this.axiosInstance(requestParams).then(
            (res: { config: any; request: any; result: any; data: any; status: string; headers: any }) => {
                DefaultHttpClient.httpResponse = res;
                if (!res) { return };

                delete res.config;
                delete res.request;

                res.result = res.data;
                delete res.data;

                if (httpRequest['responseHeaders']) {
                    const responseHeaders = httpRequest['responseHeaders'];
                    for (let item of responseHeaders) {
                        let lowerItem = item.toString().toLowerCase();
                        if (!res.result[item] && res.headers[lowerItem]) {
                            res.result[item] = res.headers[lowerItem];
                        }
                    }
                }
                return res;
            },
            (err: any) => {
                DefaultHttpClient.httpResponse = err;

                throw this.formatError(err);
            }
        );
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

    /**
     * Format error returned by axios
     * @private
     * @returns {Error}
     * @param axiosError
     */
    public formatError(axiosError: any): Error {
        // return an actual error object,
        // but make it flexible so we can add properties like 'body'
        const error: any = new Error();

        // axios specific handling
        // this branch is for an error received from the service
        if (axiosError.response) {
            axiosError = axiosError.response;
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            delete axiosError.config;
            delete axiosError.request;

            error.statusText = axiosError.statusText;
            error.name = axiosError.statusText; // ** deprecated **

            error.status = axiosError.status;
            error.code = axiosError.status;  // ** deprecated **

            error.message = parseServiceErrorMessage(axiosError.data) || axiosError.statusText;

            // some services bury the useful error message within 'data'
            // adding it to the error under the key 'body' as a string or object
            let errorBody;
            try {
                // try/catch to handle objects with circular references
                // errorBody = JSON.stringify(axiosError.data);
                errorBody = axiosError.data;
            } catch (e) {
                // ignore the error, use the object, and tack on a warning
                errorBody = axiosError.data;
                errorBody.warning = 'Body contains circular reference';
                this.logger.error(`Failed to stringify axiosError: ${e}`);
            }

            error.body = errorBody;

            // attach headers to error object
            error.headers = axiosError.headers;

            // print a more descriptive error message for auth issues
            if (isAuthenticationError(axiosError)) {
                error.message = 'Access is denied due to invalid credentials.';
            }
        } else if (axiosError.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            error.message = axiosError.message;
            error.statusText = axiosError.code;
            error.body = axiosError.message;

            // when a request to a private cloud instance has an ssl problem, it never connects and follows this branch of the error handling
            if (isSelfSignedCertificateError(axiosError)) {
                error.message = `The connection failed because the SSL certificate is not valid. ` +
                    `To use a self-signed certificate, set the \`disableSslVerification\` parameter in the constructor options.`;
            }
        } else {
            // Something happened in setting up the request that triggered an Error
            error.message = axiosError.message;
        }
        this.logger.error("some error found:", error);
        return error;
    }
}


function stripTrailingSlash(url: string | undefined): string {
    // Match a forward slash / at the end of the string ($)
    // @ts-ignore
    return url.replace(/\/$/, '');
}
/**
 * Determine if the error is due to bad credentials
 * @private
 * @param {Object} error - error object returned from axios
 * @returns {boolean} true if error is due to authentication
 */
function isAuthenticationError(error: any): boolean {
    let isAuthErr = false;
    const code: number = error.status || null;
    const body: any = error.data || {};

    // handle specific error from iam service, should be relevant across platforms
    const isIamServiceError: boolean = body.context &&
        body.context.url &&
        body.context.url.indexOf('iam') > -1;

    if (code === 401 || code === 403 || isIamServiceError) {
        isAuthErr = true;
    }

    return isAuthErr;
}
/**
 * Look for service error message in common places, by priority
 * first look in `errors[0].message`, then in `error`, then in
 * `message`, then in `errorMessage`
 * @private
 * @param {Object} response - error response body received from service
 * @returns {string | undefined} the error message if is was found, undefined otherwise
 */
function parseServiceErrorMessage(response: any): string | undefined {
    let message;

    if (Array.isArray(response.errors) && response.errors.length > 0 && hasStringProperty(response.errors[0], 'message')) {
        message = response.errors[0].message;
    } else if (hasStringProperty(response, 'error')) {
        message = response.error;
    } else if (hasStringProperty(response, 'message')) {
        message = response.message;
    } else if (hasStringProperty(response, 'errorMessage')) {
        message = response.errorMessage;
    }

    return message;
}

/**
 * Return true if object has a specified property that is a string
 * @private
 * @param {Object} obj - object to look for property in
 * @param {string} property - name of the property to look for
 * @returns {boolean} true if property exists and is string
 */
function hasStringProperty(obj: any, property: string): boolean {
    return Boolean(obj[property] && typeof obj[property] === 'string');
}

/**
* Determine if the error is due to a bad self signed certificate
* @private
* @param {Object} error - error object returned from axios
* @returns {boolean} true if error is due to an SSL error
*/
function isSelfSignedCertificateError(error: any): boolean {
    let result = false;

    const sslCode = 'DEPTH_ZERO_SELF_SIGNED_CERT';
    const sslMessage = 'self signed certificate';

    const hasSslCode = error.code === sslCode;
    const hasSslMessage = hasStringProperty(error, 'message') && error.message.includes(sslMessage);

    if (hasSslCode || hasSslMessage) {
        result = true;
    }

    return result;
}

export interface ClientOptions {
    disableSslVerification: boolean,
    proxy: string,
    headers?: object,
    logger?: Logger,
    logLevel?: LogLevel;
}
