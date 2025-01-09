import { CbcCallbackRsp } from './CbcCallbackRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDesktopPoolVolumesResponse extends SdkResponse {
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
    public withErrorCode(errorCode: string): AddDesktopPoolVolumesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): AddDesktopPoolVolumesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCbcJobId(cbcJobId: string): AddDesktopPoolVolumesResponse {
        this['cbcJobId'] = cbcJobId;
        return this;
    }
    public withGetJobEndpoint(getJobEndpoint: string): AddDesktopPoolVolumesResponse {
        this['getJobEndpoint'] = getJobEndpoint;
        return this;
    }
    public withMaxProvisionTime(maxProvisionTime: number): AddDesktopPoolVolumesResponse {
        this['maxProvisionTime'] = maxProvisionTime;
        return this;
    }
    public withMinProvisionTime(minProvisionTime: number): AddDesktopPoolVolumesResponse {
        this['minProvisionTime'] = minProvisionTime;
        return this;
    }
    public withPeriodicQueryTime(periodicQueryTime: number): AddDesktopPoolVolumesResponse {
        this['periodicQueryTime'] = periodicQueryTime;
        return this;
    }
    public withJobId(jobId: string): AddDesktopPoolVolumesResponse {
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