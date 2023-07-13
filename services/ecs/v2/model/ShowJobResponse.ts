import { JobEntities } from './JobEntities';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    private 'begin_time'?: string | undefined;
    public code?: string;
    private 'end_time'?: string | undefined;
    public entities?: JobEntities;
    private 'error_code'?: string | undefined;
    private 'fail_reason'?: string | undefined;
    private 'job_id'?: string | undefined;
    private 'job_type'?: string | undefined;
    public message?: string;
    public status?: ShowJobResponseStatusEnum;
    public constructor() { 
        super();
    }
    public withBeginTime(beginTime: string): ShowJobResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
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
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
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
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason() {
        return this['fail_reason'];
    }
    public withJobId(jobId: string): ShowJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
        return this['job_type'];
    }
    public withMessage(message: string): ShowJobResponse {
        this['message'] = message;
        return this;
    }
    public withStatus(status: ShowJobResponseStatusEnum): ShowJobResponse {
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
