import { VideoMotionCaptureInfo } from './VideoMotionCaptureInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVideoMotionCaptureJobsResponse extends SdkResponse {
    public total?: number;
    private 'video_motion_capture_jobs'?: Array<VideoMotionCaptureInfo>;
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
}