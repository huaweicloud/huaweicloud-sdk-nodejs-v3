

export class ReferenceInfo {
    private 'job_id'?: string;
    private 'job_name'?: string;
    public constructor(jobId?: string, jobName?: string) { 
        this['job_id'] = jobId;
        this['job_name'] = jobName;
    }
    public withJobId(jobId: string): ReferenceInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ReferenceInfo {
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