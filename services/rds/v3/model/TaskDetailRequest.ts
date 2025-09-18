

export class TaskDetailRequest {
    private 'workflow_id'?: string;
    private 'workflow_name'?: string;
    public constructor(workflowId?: string, workflowName?: string) { 
        this['workflow_id'] = workflowId;
        this['workflow_name'] = workflowName;
    }
    public withWorkflowId(workflowId: string): TaskDetailRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkflowName(workflowName: string): TaskDetailRequest {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string  | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName(): string | undefined {
        return this['workflow_name'];
    }
}