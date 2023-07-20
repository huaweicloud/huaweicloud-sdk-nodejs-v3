

export class JobSubmitResult {
    private 'job_id'?: string;
    public state?: JobSubmitResultStateEnum | string;
    public constructor() { 
    }
    public withJobId(jobId: string): JobSubmitResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: JobSubmitResultStateEnum | string): JobSubmitResult {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobSubmitResultStateEnum {
    COMPLETE = 'COMPLETE',
    FAILED = 'FAILED'
}
