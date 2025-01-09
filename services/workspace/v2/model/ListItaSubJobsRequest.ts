

export class ListItaSubJobsRequest {
    public status?: string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'desktop_pool_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withStatus(status: string): ListItaSubJobsRequest {
        this['status'] = status;
        return this;
    }
    public withJobId(jobId: string): ListItaSubJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ListItaSubJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withDesktopPoolId(desktopPoolId: string): ListItaSubJobsRequest {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withLimit(limit: number): ListItaSubJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListItaSubJobsRequest {
        this['offset'] = offset;
        return this;
    }
}