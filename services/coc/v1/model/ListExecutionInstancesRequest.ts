

export class ListExecutionInstancesRequest {
    public limit?: number;
    public offset?: number;
    private 'execution_step_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListExecutionInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExecutionInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withExecutionStepId(executionStepId: string): ListExecutionInstancesRequest {
        this['execution_step_id'] = executionStepId;
        return this;
    }
    public set executionStepId(executionStepId: string  | undefined) {
        this['execution_step_id'] = executionStepId;
    }
    public get executionStepId(): string | undefined {
        return this['execution_step_id'];
    }
}