import { SubJobDatas } from './SubJobDatas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobProgressResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'sub_job_id'?: number;
    public progress?: number;
    private 'sub_jobs'?: Array<SubJobDatas>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowJobProgressResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowJobProgressResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): ShowJobProgressResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ShowJobProgressResponse {
        this['status'] = status;
        return this;
    }
    public withSubJobId(subJobId: number): ShowJobProgressResponse {
        this['sub_job_id'] = subJobId;
        return this;
    }
    public set subJobId(subJobId: number  | undefined) {
        this['sub_job_id'] = subJobId;
    }
    public get subJobId(): number | undefined {
        return this['sub_job_id'];
    }
    public withProgress(progress: number): ShowJobProgressResponse {
        this['progress'] = progress;
        return this;
    }
    public withSubJobs(subJobs: Array<SubJobDatas>): ShowJobProgressResponse {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJobDatas>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJobDatas> | undefined {
        return this['sub_jobs'];
    }
}