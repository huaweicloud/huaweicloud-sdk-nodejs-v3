

export class ShowWorkflowRequest {
    private 'workflow_id'?: string;
    private 'workspace_id'?: string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowWorkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}