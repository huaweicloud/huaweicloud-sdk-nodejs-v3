import { CreateAopWorkflowVersionApprovelInfo } from './CreateAopWorkflowVersionApprovelInfo';


export class CreateAopWorkflowVersionApprovelRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    public body?: CreateAopWorkflowVersionApprovelInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
    }
    public withContentType(contentType: string): CreateAopWorkflowVersionApprovelRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): CreateAopWorkflowVersionApprovelRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): CreateAopWorkflowVersionApprovelRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: CreateAopWorkflowVersionApprovelInfo): CreateAopWorkflowVersionApprovelRequest {
        this['body'] = body;
        return this;
    }
}