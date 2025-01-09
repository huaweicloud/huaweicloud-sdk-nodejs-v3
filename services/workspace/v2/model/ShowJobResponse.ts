import { JobDetailInfo } from './JobDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    public id?: string;
    private 'job_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'job_error_code'?: string;
    private 'fail_reason'?: string;
    private 'sub_jobs_total'?: number;
    private 'sub_jobs'?: Array<JobDetailInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowJobResponse {
        this['id'] = id;
        return this;
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
    public withStatus(status: string): ShowJobResponse {
        this['status'] = status;
        return this;
    }
    public withJobErrorCode(jobErrorCode: string): ShowJobResponse {
        this['job_error_code'] = jobErrorCode;
        return this;
    }
    public set jobErrorCode(jobErrorCode: string  | undefined) {
        this['job_error_code'] = jobErrorCode;
    }
    public get jobErrorCode(): string | undefined {
        return this['job_error_code'];
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
    public withSubJobsTotal(subJobsTotal: number): ShowJobResponse {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
    public withSubJobs(subJobs: Array<JobDetailInfo>): ShowJobResponse {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<JobDetailInfo>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<JobDetailInfo> | undefined {
        return this['sub_jobs'];
    }
}