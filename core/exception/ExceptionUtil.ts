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

import { ClientRequestException } from "./ClientRequestException";
import { ExceptionResponse } from "./ExceptionResponse";
import { ServerResponseException } from "./ServerResponseException";
import { ServiceResponseException } from "./ServiceResponseException";

export class ExceptionUtil {
    static generalException(exception: ExceptionResponse) {
        const data = exception.data || {};
        let errorCode = data.error ? data.error.code : exception.status;
        let errorMsg = data.error ? data.error.message : exception.message;
        let requestId = exception.requestId;

        const httpStatusCode = exception.status;
        if (httpStatusCode) {
            if (httpStatusCode >= 400 && httpStatusCode < 500) {
                return new ClientRequestException(httpStatusCode, errorMsg, errorCode, requestId);
            } else if (httpStatusCode >= 500 && httpStatusCode < 600) {
                return new ServerResponseException(httpStatusCode, errorMsg, errorCode, requestId);
            }
        }
        return new ServiceResponseException(httpStatusCode, errorMsg, errorCode, requestId);
    }
}