import { CreateDesktopRsp } from './CreateDesktopRsp';
import { ResizeDesktopPoolJobResponse } from './ResizeDesktopPoolJobResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeDesktopPoolResponse extends SdkResponse {
    private 'job_id'?: string;
    public jobs?: Array<ResizeDesktopPoolJobResponse>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ResizeDesktopPoolResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobs(jobs: Array<ResizeDesktopPoolJobResponse>): ResizeDesktopPoolResponse {
        this['jobs'] = jobs;
        return this;
    }
}