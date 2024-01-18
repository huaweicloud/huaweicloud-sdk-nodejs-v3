import { ConnectionMonitorInfo } from './ConnectionMonitorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectionMonitorResponse extends SdkResponse {
    private 'connection_monitor'?: ConnectionMonitorInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withConnectionMonitor(connectionMonitor: ConnectionMonitorInfo): ShowConnectionMonitorResponse {
        this['connection_monitor'] = connectionMonitor;
        return this;
    }
    public set connectionMonitor(connectionMonitor: ConnectionMonitorInfo  | undefined) {
        this['connection_monitor'] = connectionMonitor;
    }
    public get connectionMonitor(): ConnectionMonitorInfo | undefined {
        return this['connection_monitor'];
    }
    public withRequestId(requestId: string): ShowConnectionMonitorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}