import { CreateDesktopRsp } from './CreateDesktopRsp';
import { ResizeDesktopPoolJobResponse } from './ResizeDesktopPoolJobResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeDesktopPoolResponse extends SdkResponse {
    private 'job_id'?: string;
    public cbcJobId?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    private 'error_policy'?: string;
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
    public withCbcJobId(cbcJobId: string): ResizeDesktopPoolResponse {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): ResizeDesktopPoolResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ResizeDesktopPoolResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ResizeDesktopPoolResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ResizeDesktopPoolResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
    public withErrorPolicy(errorPolicy: string): ResizeDesktopPoolResponse {
        this['error_policy'] = errorPolicy;
        return this;
    }
    public set errorPolicy(errorPolicy: string  | undefined) {
        this['error_policy'] = errorPolicy;
    }
    public get errorPolicy(): string | undefined {
        return this['error_policy'];
    }
    public withJobs(jobs: Array<ResizeDesktopPoolJobResponse>): ResizeDesktopPoolResponse {
        this['jobs'] = jobs;
        return this;
    }
}