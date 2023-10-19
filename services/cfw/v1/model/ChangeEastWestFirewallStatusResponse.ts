import { SuccessRspData } from './SuccessRspData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeEastWestFirewallStatusResponse extends SdkResponse {
    public data?: SuccessRspData;
    private 'trace_id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: SuccessRspData): ChangeEastWestFirewallStatusResponse {
        this['data'] = data;
        return this;
    }
    public withTraceId(traceId: string): ChangeEastWestFirewallStatusResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
}