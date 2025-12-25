import { ModifyAopWorkflowInfo } from './ModifyAopWorkflowInfo';


export class UpdateAopWorkflowRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'workflow_id'?: string;
    public body?: ModifyAopWorkflowInfo;
    public constructor(contentType?: string, workspaceId?: string, workflowId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['workflow_id'] = workflowId;
    }
    public withContentType(contentType: string): UpdateAopWorkflowRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateAopWorkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWorkflowId(workflowId: string): UpdateAopWorkflowRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withBody(body: ModifyAopWorkflowInfo): UpdateAopWorkflowRequest {
        this['body'] = body;
        return this;
    }
}