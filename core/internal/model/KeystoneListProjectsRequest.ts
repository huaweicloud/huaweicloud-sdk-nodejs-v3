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

export class KeystoneListProjectsRequest {
    private 'domain_id'?: string | undefined;
    public name?: string;
    private 'parent_id'?: string | undefined;
    public enabled?: boolean;
    private 'is_domain'?: boolean | undefined;
    public page?: number;
    private 'per_page'?: number | undefined;
    public constructor() { 
    }
    public withDomainId(domainId: string): KeystoneListProjectsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withName(name: string): KeystoneListProjectsRequest {
        this['name'] = name;
        return this;
    }
    public withParentId(parentId: string): KeystoneListProjectsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withEnabled(enabled: boolean): KeystoneListProjectsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withIsDomain(isDomain: boolean): KeystoneListProjectsRequest {
        this['is_domain'] = isDomain;
        return this;
    }
    public set isDomain(isDomain: boolean | undefined) {
        this['is_domain'] = isDomain;
    }
    public get isDomain() {
        return this['is_domain'];
    }
    public withPage(page: number): KeystoneListProjectsRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): KeystoneListProjectsRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage() {
        return this['per_page'];
    }
}