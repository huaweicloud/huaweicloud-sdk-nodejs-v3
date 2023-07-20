

export class DeleteJobExecutionRequest {
    private 'job_execution_id'?: string;
    public constructor(jobExecutionId?: string) { 
        this['job_execution_id'] = jobExecutionId;
    }
    public withJobExecutionId(jobExecutionId: string): DeleteJobExecutionRequest {
        this['job_execution_id'] = jobExecutionId;
        return this;
    }
    public set jobExecutionId(jobExecutionId: string  | undefined) {
        this['job_execution_id'] = jobExecutionId;
    }
    public get jobExecutionId(): string | undefined {
        return this['job_execution_id'];
    }
}