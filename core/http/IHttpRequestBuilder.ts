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

import { IHttpRequest, HttpRequestImpl } from "./IHttpRequest";

export class HttpRequestBuilder {
  private httpRequest: HttpRequestImpl;

  constructor(httpRequest?: HttpRequestImpl) {
    this.httpRequest = httpRequest || new HttpRequestImpl();
  }

  public build(): IHttpRequest {
    return this.httpRequest;
  }
  public withEndpoint(endpoints: string) {
    this.httpRequest.endpoint = endpoints;
    return this;
  }
  public withUrl(value?: string) {
    this.httpRequest.url = value;
    return this;
  }

  public withContentType(value: string) {
    this.httpRequest.contentType = value;
    return this;
  }

  public withMethod(value: string) {
    this.httpRequest.method = value;
    return this;
  }

  public withQueryParams(value: any) {
    this.httpRequest.queryParams = value;
    return this;
  }
  public withPathParams(value: any) {
    this.httpRequest.pathParams = value;
    return this;
  }

  public withHeaders(value: any) {
    this.httpRequest.headers = value;
    return this;
  }

  public withData(value: any) {
    this.httpRequest.data = value;
    return this;
  }
  public addPathParams(pathParams: {}) {
    Object.assign(this.httpRequest.getPathParams(), pathParams);
    return this;
  }
  public addQueryParams(queryParams: {}) {
    Object.assign(this.httpRequest.getQueryParams, queryParams);
    return this;
  }

  public addHeaders(key: string, value: string) {
    const headers = this.httpRequest.getHeaders();
    if (!headers![key]) {
      this.httpRequest.headers[key] = value;
    }
    return this;
  }
  public addAllHeaders(header: any) {
    Object.assign(this.httpRequest.getHeaders(), header);
    return this;
  }
}
