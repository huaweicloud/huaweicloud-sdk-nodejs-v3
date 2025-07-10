import { CbcCallbackRsp } from './CbcCallbackRsp';
import { ResizeDesktopJobResponse } from './ResizeDesktopJobResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeDesktopResponse extends SdkResponse {
    public jobs?: Array<ResizeDesktopJobResponse>;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<ResizeDesktopJobResponse>): ResizeDesktopResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withJobId(jobId: string): ResizeDesktopResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}