

export class PreviewSqlJobResultRequest {
    private 'job_id'?: string;
    private 'queue-name'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): PreviewSqlJobResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withQueueName(queueName: string): PreviewSqlJobResultRequest {
        this['queue-name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue-name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue-name'];
    }
}