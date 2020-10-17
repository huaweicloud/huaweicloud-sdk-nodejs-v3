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
import { ServerResponseException } from "./ServerResponseException";
import { ServiceResponseException } from "./ServiceResponseException";

export class ExceptionUtil {
    static generalException(httpStatusCode: string | number, errorData: { error_code: any; error_msg: any; request_id: any; code: any; message: any; } | null | undefined) {
        let errorCode;
        let errorMsg;
        let requestId;
        if (errorData !== null && errorData !== undefined) {
            errorCode = errorData.error_code;
            errorMsg = errorData.error_msg;
            requestId = errorData.request_id;
            if (errorCode === null || errorCode === undefined) {
                errorCode = errorData.code;
                errorMsg = errorData.message;
                if (errorCode === null || errorCode === undefined) {
                    errorMsg = errorData;
                }               
            }
        }
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