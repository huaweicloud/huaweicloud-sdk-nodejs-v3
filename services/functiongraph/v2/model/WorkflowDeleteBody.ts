

export class WorkflowDeleteBody {
    private 'workflow_urns'?: Array<string>;
    public constructor(workflowUrns?: Array<string>) { 
        this['workflow_urns'] = workflowUrns;
    }
    public withWorkflowUrns(workflowUrns: Array<string>): WorkflowDeleteBody {
        this['workflow_urns'] = workflowUrns;
        return this;
    }
    public set workflowUrns(workflowUrns: Array<string>  | undefined) {
        this['workflow_urns'] = workflowUrns;
    }
    public get workflowUrns(): Array<string> | undefined {
        return this['workflow_urns'];
    }
}