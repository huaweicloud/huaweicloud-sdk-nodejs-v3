import { CreateConnectionMonitorInfo } from './CreateConnectionMonitorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectionMonitorResponse extends SdkResponse {
    private 'connection_monitor'?: CreateConnectionMonitorInfo;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withConnectionMonitor(connectionMonitor: CreateConnectionMonitorInfo): CreateConnectionMonitorResponse {
        this['connection_monitor'] = connectionMonitor;
        return this;
    }
    public set connectionMonitor(connectionMonitor: CreateConnectionMonitorInfo  | undefined) {
        this['connection_monitor'] = connectionMonitor;
    }
    public get connectionMonitor(): CreateConnectionMonitorInfo | undefined {
        return this['connection_monitor'];
    }
    public withRequestId(requestId: string): CreateConnectionMonitorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateConnectionMonitorResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}