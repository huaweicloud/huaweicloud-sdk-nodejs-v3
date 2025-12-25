import { ModifyActionInfo } from './ModifyActionInfo';


export class UpdatePlaybookActionRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    private 'action_id'?: string;
    public body?: ModifyActionInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string, actionId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
        this['action_id'] = actionId;
    }
    public withContentType(contentType: string): UpdatePlaybookActionRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdatePlaybookActionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): UpdatePlaybookActionRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withActionId(actionId: string): UpdatePlaybookActionRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: ModifyActionInfo): UpdatePlaybookActionRequest {
        this['body'] = body;
        return this;
    }
}