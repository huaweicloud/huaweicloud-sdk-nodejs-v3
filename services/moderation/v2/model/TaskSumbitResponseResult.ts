

export class TaskSumbitResponseResult {
    private 'job_id'?: string | undefined;
    public constructor() { 
    }
    public withJobId(jobId: string): TaskSumbitResponseResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}