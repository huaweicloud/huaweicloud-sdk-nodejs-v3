import { JobDetailInfo } from './JobDetailInfo';
import { JobInfo } from './JobInfo';
import { JobStatus } from './JobStatus';
import { JobType } from './JobType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    public id?: string;
    private 'job_type'?: JobType;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    public status?: JobStatus;
    private 'sub_jobs_total'?: number;
    private 'sub_jobs'?: Array<JobDetailInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowJobDetailResponse {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: JobType): ShowJobDetailResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: JobType  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): JobType | undefined {
        return this['job_type'];
    }
    public withBeginTime(beginTime: Date): ShowJobDetailResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ShowJobDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatus(status: JobStatus): ShowJobDetailResponse {
        this['status'] = status;
        return this;
    }
    public withSubJobsTotal(subJobsTotal: number): ShowJobDetailResponse {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
    public withSubJobs(subJobs: Array<JobDetailInfo>): ShowJobDetailResponse {
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