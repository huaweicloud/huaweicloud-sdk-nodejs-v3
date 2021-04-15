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

import axios, { AxiosResponse } from 'axios';
import extend from 'extend';
import https = require('https');
import { IHttpRequest } from './IHttpRequest';
import querystring = require('querystring');
import { HttpClient } from './HttpClient';
import HttpsProxyAgent = require('https-proxy-agent');
import { Logger, LogLevel, getLogger } from '../logger';

export class DefaultHttpClient implements HttpClient {
    private axiosInstance: any;
    public static httpReqParam: any;
    public static httpResponse: any;
    private static loggerName = "DefaultHttpClient";
    private logger: Logger;

    private DEFAULT_HEADERS =
        {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

    public constructor({
        disableSslVerification = true,
        proxy = undefined,
        logger = undefined,
        logLevel = LogLevel.INFO,
        headers = {}
    }: ClientOptions) {

        // proxy
        let proxyAgent = undefined;
        if (proxy) {
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

        // override several axios defaults
        // axios sets the default Content-Type for `post`, `put`, and `patch` operations
        // to 'application/x-www-form-urlencoded'. This causes problems, so overriding the
        // defaults here

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

        this.axiosInstance.interceptors.request.use((config: any) => {
            this.logger.debug('Request:', config);

            return config;
        }, (error: any) => {
            this.logger.error('Error: ', error);
            // @ts-ignore
            return Promise.reject(error);
        });

        this.axiosInstance.interceptors.response.use((response: any) => {
            this.logger.debug('Response:', response);

            return response;
        }, (error: any) => {
            this.logger.error('Error: ', error);
            // @ts-ignore
            return Promise.reject(error);
        });


        this.logger.debug('initialized');
    }

    public sendRequest(httpRequest: IHttpRequest): Promise<any> {
        const { endpoint, queryParams, method, data, headers } = httpRequest;
        this.logger.debug(`send request start: ${endpoint} `);

        // Path params
        let url = endpoint;//parsePath(endpoint, pathParams);
        url = stripTrailingSlash(url);
        headers['User-Agent'] = "huaweicloud-usdk-nodejs/3.0";
        const requestParams = {
            url,
            method,
            headers,
            params: queryParams,
            data,
            paramsSerializer: (params: any) => {
                return querystring.stringify(params);
            },
        };
        DefaultHttpClient.httpReqParam = requestParams;
        return this.axiosInstance(requestParams).then(
            (res: { config: any; request: any; result: any; data: any; status: string; headers: any }) => {
                // sometimes error responses will still trigger the `then` block - escape that behavior here
                DefaultHttpClient.httpResponse = res;
                if (!res) { return };

                // these objects contain circular json structures and are not always relevant to the user
                // if the user wants them, they can be accessed through the debug properties
                delete res.config;
                delete res.request;

                // the other sdks use the interface `result` for the body
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

                let requestId = res.headers ? res.headers['x-request-id'] : undefined;
                let reponseLength = res.result ? JSON.stringify(res.result).length : 1;
                this.logger.info('"' + requestParams.method + ' ' + requestParams.url + '" ' + res.status + ' ' + reponseLength + ' ' + requestId);

                this.logger.debug('request: ' + JSON.stringify(requestParams) + ". response: " + JSON.stringify(res));


                return res;
            },
            (err: any) => {
                this.logger.error('http reqeust failed', err.message);
                let response = err.response;
                DefaultHttpClient.httpResponse = err;

                let requestId;
                let reponseLength;
                let status;
                if (response) {
                    requestId = response.headers ? response.headers['x-request-id'] : undefined;
                    reponseLength = response.data ? JSON.stringify(response.data).length : 1;
                    status = response.status;
                }

                this.logger.info('"' + requestParams.method + ' ' + requestParams.url + '" ' + status + ' ' + reponseLength + ' ' + requestId);

                this.logger.debug('request: ' + JSON.stringify(requestParams) + ". response: " + JSON.stringify(err));


                // return another promise that rejects with 'err' to be handled in generated code
                throw this.formatError(err);
            }
        );
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

        return error;
    }
}



/**
 * @private
 * @param {string} path
 * @param {Object} params
 * @returns {string}
 */
function parsePath(path: string, params: any): string {
    if (!path || !params) {
        return path;
    }
    return Object.keys(params).reduce((parsedPath, param) => {
        const value = encodeURIComponent(params[param]);
        return parsedPath.replace(new RegExp(`{${param}}`), value);
    }, path);
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

    this.logger.info(`Parsing service error message: ${message}`);
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
