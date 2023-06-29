

export class JobSubmitResult {
    private 'job_id'?: string | undefined;
    public state?: JobSubmitResultStateEnum;
    public constructor() { 
    }
    public withJobId(jobId: string): JobSubmitResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withState(state: JobSubmitResultStateEnum): JobSubmitResult {
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
