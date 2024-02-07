import { CountGeipSegments } from './CountGeipSegments';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountGlobalEipSegmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'global_eip_segments'?: CountGeipSegments;
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
    public withGlobalEipSegments(globalEipSegments: CountGeipSegments): CountGlobalEipSegmentResponse {
        this['global_eip_segments'] = globalEipSegments;
        return this;
    }
    public set globalEipSegments(globalEipSegments: CountGeipSegments  | undefined) {
        this['global_eip_segments'] = globalEipSegments;
    }
    public get globalEipSegments(): CountGeipSegments | undefined {
        return this['global_eip_segments'];
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