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

import logger = require('debug');
const debug = logger('hw-node-sdk-core:debug');
const error = logger('hw-node-sdk-core:error');
const info = logger('hw-node-sdk-core:info');
const verbose = logger('hw-node-sdk-core:verbose');
const warn = logger('hw-node-sdk-core:warning');

// enable loggers if axios flag is set & mimic log levels severity
if (process.env.NODE_DEBUG === 'axios') {
  debug.enabled = true;
}
if (debug.enabled) {
  verbose.enabled = true;
}
if (verbose.enabled) {
  info.enabled = true;
}
if (info.enabled) {
  warn.enabled = true;
}
if (warn.enabled) {
  error.enabled = true;
}
// export loggers;
export default {
  debug,
  error,
  info,
  verbose,
  warn
}
