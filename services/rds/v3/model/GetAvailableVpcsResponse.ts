import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAvailableVpcsResponse extends SdkResponse {
    public vpcs?: Array<Vpc>;
    private 'X-TRACE-ID'?: string;
    public constructor() { 
        super();
    }
    public withVpcs(vpcs: Array<Vpc>): GetAvailableVpcsResponse {
        this['vpcs'] = vpcs;
        return this;
    }
    public withXTraceId(xTraceId: string): GetAvailableVpcsResponse {
        this['X-TRACE-ID'] = xTraceId;
        return this;
    }
    public set xTraceId(xTraceId: string  | undefined) {
        this['X-TRACE-ID'] = xTraceId;
    }
    public get xTraceId(): string | undefined {
        return this['X-TRACE-ID'];
    }
}