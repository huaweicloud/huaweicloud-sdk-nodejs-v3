import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsSwitchUsingPostResponse extends SdkResponse {
    private 'trace_id'?: string | undefined;
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): ChangeIpsSwitchUsingPostResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withData(data: CommonResponseDTOData): ChangeIpsSwitchUsingPostResponse {
        this['data'] = data;
        return this;
    }
}