import { ConnectionMonitorInfo } from './ConnectionMonitorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionMonitorsResponse extends SdkResponse {
    private 'connection_monitors'?: Array<ConnectionMonitorInfo>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withConnectionMonitors(connectionMonitors: Array<ConnectionMonitorInfo>): ListConnectionMonitorsResponse {
        this['connection_monitors'] = connectionMonitors;
        return this;
    }
    public set connectionMonitors(connectionMonitors: Array<ConnectionMonitorInfo>  | undefined) {
        this['connection_monitors'] = connectionMonitors;
    }
    public get connectionMonitors(): Array<ConnectionMonitorInfo> | undefined {
        return this['connection_monitors'];
    }
    public withRequestId(requestId: string): ListConnectionMonitorsResponse {
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