

export class JobInfo {
    private 'execution_status'?: JobInfoExecutionStatusEnum | string;
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'rollback_enabled'?: boolean;
    public constructor() { 
    }
    public withExecutionStatus(executionStatus: JobInfoExecutionStatusEnum | string): JobInfo {
        this['execution_status'] = executionStatus;
        return this;
    }
    public set executionStatus(executionStatus: JobInfoExecutionStatusEnum | string  | undefined) {
        this['execution_status'] = executionStatus;
    }
    public get executionStatus(): JobInfoExecutionStatusEnum | string | undefined {
        return this['execution_status'];
    }
    public withJobId(jobId: string): JobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): JobInfo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withRollbackEnabled(rollbackEnabled: boolean): JobInfo {
        this['rollback_enabled'] = rollbackEnabled;
        return this;
    }
    public set rollbackEnabled(rollbackEnabled: boolean  | undefined) {
        this['rollback_enabled'] = rollbackEnabled;
    }
    public get rollbackEnabled(): boolean | undefined {
        return this['rollback_enabled'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobInfoExecutionStatusEnum {
    RUNNING = 'RUNNING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
