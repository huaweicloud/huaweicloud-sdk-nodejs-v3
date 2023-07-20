

export class RetryWorkFlowRequest {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    public constructor(workflowId?: string, executionId?: string) { 
        this['workflow_id'] = workflowId;
        this['execution_id'] = executionId;
    }
    public withWorkflowId(workflowId: string): RetryWorkFlowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): RetryWorkFlowRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
}