

export class ShowWorkFlowRequest {
    private 'workflow_id': string | undefined;
    public constructor(workflowId?: any) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ShowWorkFlowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
}