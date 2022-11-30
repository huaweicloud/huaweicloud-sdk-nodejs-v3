import { VPCProtectsVo } from './VPCProtectsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcProtectsResponse extends SdkResponse {
    private 'trace_id'?: string | undefined;
    public data?: VPCProtectsVo;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): ListVpcProtectsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withData(data: VPCProtectsVo): ListVpcProtectsResponse {
        this['data'] = data;
        return this;
    }
}