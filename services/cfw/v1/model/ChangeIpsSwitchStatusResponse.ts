import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsSwitchStatusResponse extends SdkResponse {
    private 'trace_id'?: string;
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): ChangeIpsSwitchStatusResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withData(data: CommonResponseDTOData): ChangeIpsSwitchStatusResponse {
        this['data'] = data;
        return this;
    }
}