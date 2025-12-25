

export class ListComponentsRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListComponentsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListComponentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListComponentsRequest {
        this['limit'] = limit;
        return this;
    }
}