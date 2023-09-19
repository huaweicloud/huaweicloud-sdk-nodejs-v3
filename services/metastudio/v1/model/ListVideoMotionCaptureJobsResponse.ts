import { VideoMotionCaptureInfo } from './VideoMotionCaptureInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVideoMotionCaptureJobsResponse extends SdkResponse {
    public total?: number;
    private 'video_motion_capture_jobs'?: Array<VideoMotionCaptureInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListVideoMotionCaptureJobsResponse {
        this['total'] = total;
        return this;
    }
    public withVideoMotionCaptureJobs(videoMotionCaptureJobs: Array<VideoMotionCaptureInfo>): ListVideoMotionCaptureJobsResponse {
        this['video_motion_capture_jobs'] = videoMotionCaptureJobs;
        return this;
    }
    public set videoMotionCaptureJobs(videoMotionCaptureJobs: Array<VideoMotionCaptureInfo>  | undefined) {
        this['video_motion_capture_jobs'] = videoMotionCaptureJobs;
    }
    public get videoMotionCaptureJobs(): Array<VideoMotionCaptureInfo> | undefined {
        return this['video_motion_capture_jobs'];
    }
    public withXRequestId(xRequestId: string): ListVideoMotionCaptureJobsResponse {
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