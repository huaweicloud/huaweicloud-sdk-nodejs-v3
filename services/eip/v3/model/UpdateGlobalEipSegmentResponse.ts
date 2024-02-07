import { ShortGlobalEipSegment } from './ShortGlobalEipSegment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGlobalEipSegmentResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'global_eip_segment'?: ShortGlobalEipSegment;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateGlobalEipSegmentResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGlobalEipSegment(globalEipSegment: ShortGlobalEipSegment): UpdateGlobalEipSegmentResponse {
        this['global_eip_segment'] = globalEipSegment;
        return this;
    }
    public set globalEipSegment(globalEipSegment: ShortGlobalEipSegment  | undefined) {
        this['global_eip_segment'] = globalEipSegment;
    }
    public get globalEipSegment(): ShortGlobalEipSegment | undefined {
        return this['global_eip_segment'];
    }
    public withXRequestId(xRequestId: string): UpdateGlobalEipSegmentResponse {
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