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

import { Logger4jInstance } from "./log4jLogger";

export enum LogLevel {
    ERROR = "error",
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn"
}

export interface Logger {
    debug(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    setLevel(level: LogLevel): void;
    getLevel(): LogLevel;
    setName(name: string): void;
}

export class LoggerUtils {

    /** Map of severity as comparable numbers for each log level */
    public static severity: { [key in LogLevel]: number } = {
        [LogLevel.ERROR]: 400,
        [LogLevel.WARN]: 300,
        [LogLevel.INFO]: 200,
        [LogLevel.DEBUG]: 100,
    };

    public static isMoreOrEqualSevere(a: LogLevel, b: LogLevel): boolean {
        return LoggerUtils.severity[a] >= LoggerUtils.severity[b];
    }
}

export class LocalLogger implements Logger {
    private level: LogLevel;
    private name?: string;

    constructor() {
        this.level = LogLevel.INFO;
    }

    debug(...msg: any[]): void {
        if (LoggerUtils.isMoreOrEqualSevere(LogLevel.DEBUG, this.level)) {
            Logger4jInstance.debug(this.name, ...msg);
        }
    }
    info(...msg: any[]): void {
        if (LoggerUtils.isMoreOrEqualSevere(LogLevel.INFO, this.level)) {
            Logger4jInstance.info(this.name, ...msg);
        }
    }
    warn(...msg: any[]): void {
        if (LoggerUtils.isMoreOrEqualSevere(LogLevel.WARN, this.level)) {
            Logger4jInstance.warn(this.name, ...msg);
        }
    }
    error(...msg: any[]): void {
        if (LoggerUtils.isMoreOrEqualSevere(LogLevel.ERROR, this.level)) {
            Logger4jInstance.error(this.name, ...msg);
        }
    }
    setLevel(level: LogLevel): void {
        this.level = level;
    }
    getLevel(): LogLevel {
        return this.level;
    }
    setName(name: string): void {
        this.name = name;
    }
}

let instanceCount = 0;
export function getLogger(name: string, level: LogLevel, existingLogger?: Logger): Logger {
    const instanceId = instanceCount;
    instanceCount += 1;

    const logger: Logger = (() => {
        if (existingLogger !== undefined) {
            return existingLogger;
        }
        return new LocalLogger();
    })();

    if (level !== undefined) {
        logger.setLevel(level);
    }

    logger.setName(`nodesdk:${name}:${instanceId}`);

    if (process.env.DEBUG === "DEBUG") {
        logger.setLevel(LogLevel.DEBUG);
    }

    return logger;
}
