

export class WorkflowDeleteBody {
    private 'workflow_urns': Array<string> | undefined;
    public constructor(workflowUrns?: any) { 
        this['workflow_urns'] = workflowUrns;
    }
    public withWorkflowUrns(workflowUrns: Array<string>): WorkflowDeleteBody {
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