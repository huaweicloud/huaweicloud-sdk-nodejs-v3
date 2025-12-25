

export class DeleteAdhocQueryRequest {
    private 'workspace_id'?: string;
    private 'query_id'?: string;
    public constructor(workspaceId?: string, queryId?: string) { 
        this['workspace_id'] = workspaceId;
        this['query_id'] = queryId;
    }
    public withWorkspaceId(workspaceId: string): DeleteAdhocQueryRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withQueryId(queryId: string): DeleteAdhocQueryRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
}