

export class ListPlaybookVersionsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'playbook_id'?: string;
    public status?: string;
    public enabled?: number;
    private 'version_type'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string, workspaceId?: string, playbookId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['playbook_id'] = playbookId;
    }
    public withContentType(contentType: string): ListPlaybookVersionsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybookVersionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPlaybookId(playbookId: string): ListPlaybookVersionsRequest {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withStatus(status: string): ListPlaybookVersionsRequest {
        this['status'] = status;
        return this;
    }
    public withEnabled(enabled: number): ListPlaybookVersionsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withVersionType(versionType: number): ListPlaybookVersionsRequest {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: number  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): number | undefined {
        return this['version_type'];
    }
    public withOffset(offset: number): ListPlaybookVersionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPlaybookVersionsRequest {
        this['limit'] = limit;
        return this;
    }
}