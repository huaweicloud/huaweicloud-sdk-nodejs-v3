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

import { LinksSelf } from './LinksSelf';

export class Region {
    public description: string;
    private 'parent_region_id': string | undefined;
    public links: LinksSelf;
    public id: string;
    public type: string;
    public constructor(description?: any, parentRegionId?: any, links?: any, id?: any, type?: any) {
        this['description'] = description;
        this['parent_region_id'] = parentRegionId;
        this['links'] = links; 
        this['id'] = id;
        this['type'] = type;
    }
    public withDescription(description: string): Region {
        this['description'] = description;
        return this;
    }
    public withParentRegionId(parentRegionId: string): Region {
        this['parent_region_id'] = parentRegionId;
        return this;
    }
    public set parentRegionId(parentRegionId: string | undefined) {
        this['parent_region_id'] = parentRegionId;
    }
    public get parentRegionId() {
        return this['parent_region_id'];
    }
    public withLinks(links: LinksSelf): Region {
        this['links'] = links;
        return this;
    }
    public withId(id: string): Region {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Region {
        this['type'] = type;
        return this;
    }
}