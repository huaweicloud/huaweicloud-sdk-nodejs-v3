

export class ShowInstanceJobRequest {
    private 'job_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowInstanceJobRequest {
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