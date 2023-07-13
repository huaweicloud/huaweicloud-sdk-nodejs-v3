/*
 * Copyright 2021 Huawei Technologies Co.,Ltd.
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

import { HcClient } from "../../HcClient";
import { KeystoneListRegionsResponse } from "../model/KeystoneListRegionsResponse";

export class RegionService {
    private client: HcClient;
    constructor(client: HcClient) {
        this.client = client;
    }

    async keystoneListRegions(): Promise<KeystoneListRegionsResponse> {
        const options = {
            method: "GET",
            url: "/v3/regions",
            contentType: "application/json",
            queryParams: {},
            pathParams: {},
            headers: {},
            data: {}
        };
        const localVarHeaderParameter = {} as any;
        options.headers = localVarHeaderParameter;
        return await this.client.sendRequest(options);
    }
}