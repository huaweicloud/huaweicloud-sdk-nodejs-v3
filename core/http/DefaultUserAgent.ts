/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2025-2025. All rights reserved.
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
import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../utils/constant';

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// default appid file name
const DEFAULT_APPLICATION_ID_FILE_NAME = 'application_id';
// valid appid reg
const applicationIdReg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const generateSystemVersionInfo = () => {
    const arch = os.arch();
    const platform = os.platform();
    const systemVersion = os.release();
    const nodeVersion = process.version || '';
    const langFromEnv = process.env.LANG ? process.env.LANG.split('.')[0] : '';
    return `os/${platform}#${systemVersion}#${arch} nodejs/${nodeVersion} meta/${langFromEnv}`;
};

const generateNewAppId = (dir: string) => {
    const userHomeDir = os.homedir();
    const appIdFileDir = path.join(userHomeDir, Constants.DEFAULT_PROFILE_DIR_NAME);

    // Ensure the directory exists
    if (!fs.existsSync(appIdFileDir)) {
        fs.mkdirSync(appIdFileDir, { recursive: true });
    }

    const newAppId = uuidv4();
    fs.writeFileSync(dir, newAppId);
    return newAppId;
};

const getAppId = () => {
    try {
        const userHomeDir = os.homedir();
        const applicationIdFilePath = path.join(userHomeDir, Constants.DEFAULT_PROFILE_DIR_NAME, DEFAULT_APPLICATION_ID_FILE_NAME);

        // Check if file exists
        if (fs.existsSync(applicationIdFilePath)) {
            const applicationId = fs.readFileSync(applicationIdFilePath, 'utf8').trim();

            // Validate the application ID format
            if (applicationIdReg.test(applicationId)) {
                return `app/${applicationId}`;
            }
        }

        // Generate new app ID if file doesn't exist or is invalid
        const newAppId = generateNewAppId(applicationIdFilePath);
        return `app/${newAppId}`;
    } catch (error) {
        // Return empty string on any error (as original behavior)
        return '';
    }
};

export const generateDefaultUsageAgent = (prefix: string) => {
    const systemInfo = generateSystemVersionInfo();
    const appId = getAppId();
    return [prefix, systemInfo, appId].join('; ');
};
