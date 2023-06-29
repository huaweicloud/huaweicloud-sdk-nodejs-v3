

export class DeleteJobExecutionRequest {
    private 'job_execution_id': string | undefined;
    public constructor(jobExecutionId?: any) { 
        this['job_execution_id'] = jobExecutionId;
    }
    public withJobExecutionId(jobExecutionId: string): DeleteJobExecutionRequest {
        this['job_execution_id'] = jobExecutionId;
        return this;
    }
    public set jobExecutionId(jobExecutionId: string | undefined) {
        this['job_execution_id'] = jobExecutionId;
    }
    public get jobExecutionId() {
        return this['job_execution_id'];
    }
}