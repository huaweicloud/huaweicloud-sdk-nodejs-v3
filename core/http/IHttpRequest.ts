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

import { AxiosRequestConfig } from "axios";


export interface IHttpRequest {
    endpoint?:any;
    params?: any;
    url?:string;
    contentType?: string;
    method?: string;
    queryParams?: any;
    pathParams?: any;
    headers?: any;
    data?: any;
    proxy?: any;

    getPathParams?: () => any;
    responseHeaders?: any;
    axiosRequestConfig?: AxiosRequestConfig;
}

export class HttpRequestImpl implements IHttpRequest {
    axiosRequestConfig?: AxiosRequestConfig;
    
    public endpoint?:string;
    public params: any;
    public url?:string;
    public contentType: string | undefined;
    public method: string | undefined;
    public queryParams: any;
    public pathParams: any;
    public headers: any;
    public data: any;
    public responseHeaders: any;

    public getPathParams(): any {
        if (!this.pathParams) {
            this.pathParams = {};
        }
        return this.pathParams;
    }

    public getQueryParams(): any {
        if (!this.queryParams) {
            this.queryParams = {};
        }
        return this.queryParams;
    }
    public getData(): any {
        if (!this.data) {
            this.data = {};
        }
        return this.pathParams;
    }
    public getHeaders(): any {
        if (!this.headers) {
            this.headers = {};
        }
        return this.headers;
    }
}