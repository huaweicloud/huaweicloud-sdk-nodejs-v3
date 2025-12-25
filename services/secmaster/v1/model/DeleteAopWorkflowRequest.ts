

export class DeleteAopWorkflowRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'workflow_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, workflowId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['workflow_id'] = workflowId;
    }
    public withContentType(contentType: string): DeleteAopWorkflowRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): DeleteAopWorkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkflowId(workflowId: string): DeleteAopWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
}