

export class ShowWorkflowExecutionRequest {
    private 'workflow_id': string | undefined;
    private 'execution_id': string | undefined;
    public constructor(workflowId?: any, executionId?: any) { 
        this['workflow_id'] = workflowId;
        this['execution_id'] = executionId;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): ShowWorkflowExecutionRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
}