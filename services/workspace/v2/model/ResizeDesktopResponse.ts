import { CbcCallbackRsp } from './CbcCallbackRsp';
import { ResizeDesktopJobResponse } from './ResizeDesktopJobResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeDesktopResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public cbcJobId?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    private 'error_policy'?: string;
    public jobs?: Array<ResizeDesktopJobResponse>;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ResizeDesktopResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ResizeDesktopResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCbcJobId(cbcJobId: string): ResizeDesktopResponse {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): ResizeDesktopResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ResizeDesktopResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ResizeDesktopResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ResizeDesktopResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
    public withErrorPolicy(errorPolicy: string): ResizeDesktopResponse {
        this['error_policy'] = errorPolicy;
        return this;
    }
    public set errorPolicy(errorPolicy: string  | undefined) {
        this['error_policy'] = errorPolicy;
    }
    public get errorPolicy(): string | undefined {
        return this['error_policy'];
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