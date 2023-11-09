

export class ListPlaybookActionsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string, limit?: number, offset?: number) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withContentType(contentType: string): ListPlaybookActionsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybookActionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): ListPlaybookActionsRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withLimit(limit: number): ListPlaybookActionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPlaybookActionsRequest {
        this['offset'] = offset;
        return this;
    }
}