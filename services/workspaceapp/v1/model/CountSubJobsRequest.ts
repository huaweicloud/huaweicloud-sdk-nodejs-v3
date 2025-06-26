

export class CountSubJobsRequest {
    public status?: string;
    private 'job_type'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withStatus(status: string): CountSubJobsRequest {
        this['status'] = status;
        return this;
    }
    public withJobType(jobType: string): CountSubJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobId(jobId: string): CountSubJobsRequest {
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