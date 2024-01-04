import { GetSubJobDetail } from './GetSubJobDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public status?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    private 'sub_jobs'?: Array<GetSubJobDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowJobDetailResponse {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ShowJobDetailResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowJobDetailResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: string): ShowJobDetailResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): ShowJobDetailResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withFailReason(failReason: string): ShowJobDetailResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withSubJobs(subJobs: Array<GetSubJobDetail>): ShowJobDetailResponse {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<GetSubJobDetail>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<GetSubJobDetail> | undefined {
        return this['sub_jobs'];
    }
    public withXRequestId(xRequestId: string): ShowJobDetailResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}