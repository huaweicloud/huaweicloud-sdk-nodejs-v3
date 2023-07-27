import { Entities } from './Entities';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobInfosResponse extends SdkResponse {
    public status?: ShowJobInfosResponseStatusEnum | string;
    public entities?: Entities;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    public message?: string;
    public code?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowJobInfosResponseStatusEnum | string): ShowJobInfosResponse {
        this['status'] = status;
        return this;
    }
    public withEntities(entities: Entities): ShowJobInfosResponse {
        this['entities'] = entities;
        return this;
    }
    public withJobId(jobId: string): ShowJobInfosResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobInfosResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): ShowJobInfosResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobInfosResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): ShowJobInfosResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobInfosResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withMessage(message: string): ShowJobInfosResponse {
        this['message'] = message;
        return this;
    }
    public withCode(code: string): ShowJobInfosResponse {
        this['code'] = code;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobInfosResponseStatusEnum {
    SUCCESS = 'SUCCESS',
    RUNNING = 'RUNNING',
    FAIL = 'FAIL',
    INIT = 'INIT'
}
