

export class ListJobOperationLogRequest {
    public offset?: number;
    public limit?: number;
    private 'job_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withOffset(offset: number): ListJobOperationLogRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobOperationLogRequest {
        this['limit'] = limit;
        return this;
    }
    public withJobId(jobId: string): ListJobOperationLogRequest {
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