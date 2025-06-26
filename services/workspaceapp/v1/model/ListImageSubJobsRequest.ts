

export class ListImageSubJobsRequest {
    public status?: string;
    private 'job_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'job_id'?: string;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withStatus(status: string): ListImageSubJobsRequest {
        this['status'] = status;
        return this;
    }
    public withJobType(jobType: string): ListImageSubJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withOffset(offset: number): ListImageSubJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageSubJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withJobId(jobId: string): ListImageSubJobsRequest {
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