

export class DeleteFlinkJobRequest {
    private 'job_id'?: number;
    public constructor(jobId?: number) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: number): DeleteFlinkJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
}