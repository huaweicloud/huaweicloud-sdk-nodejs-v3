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

import { LinksSelf } from './LinksSelf';


export class Domains {
    public enabled: boolean;
    public id: string;
    public name: string;
    public links: LinksSelf;
    public description: string;
    public constructor(enabled?: any, id?: any, name?: any, links?: any, description?: any) { 
        this['enabled'] = enabled;
        this['id'] = id;
        this['name'] = name;
        this['links'] = links;
        this['description'] = description;
    }
    public withEnabled(enabled: boolean): Domains {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): Domains {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Domains {
        this['name'] = name;
        return this;
    }
    public withLinks(links: LinksSelf): Domains {
        this['links'] = links;
        return this;
    }
    public withDescription(description: string): Domains {
        this['description'] = description;
        return this;
    }
}