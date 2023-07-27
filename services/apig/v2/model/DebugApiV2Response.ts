
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DebugApiV2Response extends SdkResponse {
    public request?: string;
    public response?: string;
    public latency?: number;
    public log?: string;
    public constructor() { 
        super();
    }
    public withRequest(request: string): DebugApiV2Response {
        this['request'] = request;
        return this;
    }
    public withResponse(response: string): DebugApiV2Response {
        this['response'] = response;
        return this;
    }
    public withLatency(latency: number): DebugApiV2Response {
        this['latency'] = latency;
        return this;
    }
    public withLog(log: string): DebugApiV2Response {
        this['log'] = log;
        return this;
    }
}