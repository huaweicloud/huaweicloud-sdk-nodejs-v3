

export class ListImageJobsRequest {
    public status?: string;
    private 'job_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withStatus(status: string): ListImageJobsRequest {
        this['status'] = status;
        return this;
    }
    public withJobType(jobType: string): ListImageJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withOffset(offset: number): ListImageJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImageJobsRequest {
        this['limit'] = limit;
        return this;
    }
}