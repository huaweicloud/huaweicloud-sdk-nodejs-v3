import { CbcCallbackRsp } from './CbcCallbackRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExpandDesktopPoolVolumesResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public cbcJobId?: string;
    public getJobEndpoint?: string;
    public maxProvisionTime?: number;
    public minProvisionTime?: number;
    public periodicQueryTime?: number;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ExpandDesktopPoolVolumesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ExpandDesktopPoolVolumesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCbcJobId(cbcJobId: string): ExpandDesktopPoolVolumesResponse {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): ExpandDesktopPoolVolumesResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): ExpandDesktopPoolVolumesResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): ExpandDesktopPoolVolumesResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): ExpandDesktopPoolVolumesResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
    public withJobId(jobId: string): ExpandDesktopPoolVolumesResponse {
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