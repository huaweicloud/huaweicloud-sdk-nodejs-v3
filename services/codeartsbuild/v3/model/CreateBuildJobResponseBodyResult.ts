

export class CreateBuildJobResponseBodyResult {
    private 'job_id'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): CreateBuildJobResponseBodyResult {
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