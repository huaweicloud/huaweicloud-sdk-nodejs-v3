import { ModifyAopWorkflowVersionInfo } from './ModifyAopWorkflowVersionInfo';


export class UpdateAopWorkflowVersionRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    public body?: ModifyAopWorkflowVersionInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
    }
    public withContentType(contentType: string): UpdateAopWorkflowVersionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateAopWorkflowVersionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): UpdateAopWorkflowVersionRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: ModifyAopWorkflowVersionInfo): UpdateAopWorkflowVersionRequest {
        this['body'] = body;
        return this;
    }
}