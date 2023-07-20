import { HealthMonitor } from './HealthMonitor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthMonitorResponse extends SdkResponse {
    private 'request_id'?: string;
    public healthmonitor?: HealthMonitor;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowHealthMonitorResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHealthmonitor(healthmonitor: HealthMonitor): ShowHealthMonitorResponse {
        this['healthmonitor'] = healthmonitor;
        return this;
    }
}