import { CreateRuleInfo } from './CreateRuleInfo';


export class CreatePlaybookRuleRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    public body?: CreateRuleInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
    }
    public withContentType(contentType: string): CreatePlaybookRuleRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): CreatePlaybookRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): CreatePlaybookRuleRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withBody(body: CreateRuleInfo): CreatePlaybookRuleRequest {
        this['body'] = body;
        return this;
    }
}