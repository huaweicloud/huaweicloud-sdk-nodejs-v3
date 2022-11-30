import { SuccessRspData } from './SuccessRspData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeEwProtectStatusResponse extends SdkResponse {
    public data?: SuccessRspData;
    private 'trace_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withData(data: SuccessRspData): ChangeEwProtectStatusResponse {
        this['data'] = data;
        return this;
    }
    public withTraceId(traceId: string): ChangeEwProtectStatusResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
}