import { CountGeipSegments } from './CountGeipSegments';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGlobalEipSegmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip_segment'?: CountGeipSegments;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CountGlobalEipSegmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withGlobalEipSegment(globalEipSegment: CountGeipSegments): CountGlobalEipSegmentResponse {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: CountGeipSegments  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): CountGeipSegments | undefined {
        return this['global_eip_segment'];
    }
    public withXRequestId(xRequestId: string): CountGlobalEipSegmentResponse {
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