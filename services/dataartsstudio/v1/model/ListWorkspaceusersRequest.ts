

export class ListWorkspaceusersRequest {
    private 'workspace_id'?: string;
    public limit?: string;
    public offset?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListWorkspaceusersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: string): ListWorkspaceusersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListWorkspaceusersRequest {
        this['offset'] = offset;
        return this;
    }
}