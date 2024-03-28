import { SqlJob } from './SqlJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlJobsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_count'?: number;
    public jobs?: Array<SqlJob>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListSqlJobsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListSqlJobsResponse {
        this['message'] = message;
        return this;
    }
    public withJobCount(jobCount: number): ListSqlJobsResponse {
        this['job_count'] = jobCount;
        return this;
    }
    public set jobCount(jobCount: number  | undefined) {
        this['job_count'] = jobCount;
    }
    public get jobCount(): number | undefined {
        return this['job_count'];
    }
    public withJobs(jobs: Array<SqlJob>): ListSqlJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
}