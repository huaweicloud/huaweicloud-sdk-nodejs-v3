import { JobEntities } from './JobEntities';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    private 'begin_time'?: string;
    public code?: string;
    private 'end_time'?: string;
    public entities?: JobEntities;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    public message?: string;
    public status?: ShowJobResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: string): ShowJobResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withCode(code: string): ShowJobResponse {
        this['code'] = code;
        return this;
    }
    public withEndTime(endTime: string): ShowJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEntities(entities: JobEntities): ShowJobResponse {
        this['entities'] = entities;
        return this;
    }
    public withErrorCode(errorCode: string): ShowJobResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withJobId(jobId: string): ShowJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withMessage(message: string): ShowJobResponse {
        this['message'] = message;
        return this;
    }
    public withStatus(status: ShowJobResponseStatusEnum | string): ShowJobResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    INIT = 'INIT'
}
