import { ShowGlobalEipSegment } from './ShowGlobalEipSegment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlobalEipSegmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip_segment'?: ShowGlobalEipSegment;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowGlobalEipSegmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEipSegment(globalEipSegment: ShowGlobalEipSegment): ShowGlobalEipSegmentResponse {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: ShowGlobalEipSegment  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): ShowGlobalEipSegment | undefined {
        return this['global_eip_segment'];
    }
    public withXRequestId(xRequestId: string): ShowGlobalEipSegmentResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}