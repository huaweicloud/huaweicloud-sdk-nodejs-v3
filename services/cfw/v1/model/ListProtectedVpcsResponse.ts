import { VPCProtectsVo } from './VPCProtectsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectedVpcsResponse extends SdkResponse {
    private 'trace_id'?: string;
    public data?: VPCProtectsVo;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): ListProtectedVpcsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withData(data: VPCProtectsVo): ListProtectedVpcsResponse {
        this['data'] = data;
        return this;
    }
}