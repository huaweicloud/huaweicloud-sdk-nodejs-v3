

export class ListWorkflowsRequest {
    private 'workflow_name'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withWorkflowName(workflowName: string): ListWorkflowsRequest {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName() {
        return this['workflow_name'];
    }
    public withLimit(limit: number): ListWorkflowsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkflowsRequest {
        this['offset'] = offset;
        return this;
    }
}