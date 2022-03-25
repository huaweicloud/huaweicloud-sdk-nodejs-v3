

export class BatchDeleteWorkflowsRequestBody {
    private 'workflow_urns'?: Array<string> | undefined;
    public constructor() { 
    }
    public withWorkflowUrns(workflowUrns: Array<string>): BatchDeleteWorkflowsRequestBody {
        this['workflow_urns'] = workflowUrns;
        return this;
    }
    public set workflowUrns(workflowUrns: Array<string> | undefined) {
        this['workflow_urns'] = workflowUrns;
    }
    public get workflowUrns() {
        return this['workflow_urns'];
    }
}