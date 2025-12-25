import { ApprovePlaybookInfo } from './ApprovePlaybookInfo';


export class CreatePlaybookApproveRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    public body?: ApprovePlaybookInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
    }
    public withContentType(contentType: string): CreatePlaybookApproveRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): CreatePlaybookApproveRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): CreatePlaybookApproveRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: ApprovePlaybookInfo): CreatePlaybookApproveRequest {
        this['body'] = body;
        return this;
    }
}