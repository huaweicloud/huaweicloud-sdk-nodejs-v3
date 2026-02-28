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

import { configure, getLogger, isConfigured } from 'log4js';

if(!isConfigured()) {
    configure({
        appenders: {
            console: { type: 'stdout', layout: { type: 'colored' } },
            dateFile: {
                type: 'dateFile',
                filename: `HuaweiCloud-SDK-Access.log`,
                layout: {
                    type: 'pattern',
                    pattern: '[%d] [%p] - %l %m%n'
                },
                compress: true,
                daysToKeep: 7,
                keepFileExt: true
            },
        },
        categories: {
            default: { appenders: ['console'], level: 'debug', enableCallStack: true }
        }
    });
}


export const Logger4jInstance = getLogger();
