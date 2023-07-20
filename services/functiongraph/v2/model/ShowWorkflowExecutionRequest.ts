

export class ShowWorkflowExecutionRequest {
    private 'workflow_id'?: string;
    private 'execution_id'?: string;
    private 'X-Get-Workflow-Full-History-Data'?: boolean;
    public constructor(workflowId?: string, executionId?: string) { 
        this['workflow_id'] = workflowId;
        this['execution_id'] = executionId;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): ShowWorkflowExecutionRequest {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withXGetWorkflowFullHistoryData(xGetWorkflowFullHistoryData: boolean): ShowWorkflowExecutionRequest {
        this['X-Get-Workflow-Full-History-Data'] = xGetWorkflowFullHistoryData;
        return this;
    }
    public set xGetWorkflowFullHistoryData(xGetWorkflowFullHistoryData: boolean  | undefined) {
        this['X-Get-Workflow-Full-History-Data'] = xGetWorkflowFullHistoryData;
    }
    public get xGetWorkflowFullHistoryData(): boolean | undefined {
        return this['X-Get-Workflow-Full-History-Data'];
    }
}