

export class MoveJobGroupRequestBodyJobs {
    private 'job_id'?: string;
    private 'job_name'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): MoveJobGroupRequestBodyJobs {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): MoveJobGroupRequestBodyJobs {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
}