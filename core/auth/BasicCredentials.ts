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

import { HcClient } from '../HcClient';
import { IamService } from '../internal/services/iam.service';
import { BaseCredentials } from './BaseCredentials';

export class BasicCredentials extends BaseCredentials {
    projectId?: string;

    constructor(data?: Partial<BasicCredentials>) {
        super(data);
        this.projectId = data?.projectId;
    }

    public withProjectId(projectId?: string): this {
        this.projectId = projectId;
        return this;
    }

    public setProjectId(value: string) {
        this.projectId = value;
    }

    public getPathParams() {
        const pathParams = {};
        if (this.projectId) {
            Object.assign(pathParams, { project_id: this.projectId });
        }
        return pathParams;
    }

    public getAuthHeaderName(): string {
        return 'X-Project-Id';
    }

    public getAuthParamName(): string {
        return 'project_id';
    }

    protected getAuthParamFromIam(hcClient: HcClient, region?: string): Promise<string> {
        return new IamService(hcClient, this.iamEndpoint).getProjectId(region ?? '');
    }

    protected setAuthParam(value: string): void {
        this.projectId = value;
    }
}