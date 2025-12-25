

export class ShowAdhocResultRequest {
    private 'workspace_id'?: string;
    private 'query_id'?: string;
    public batch?: number;
    public constructor(workspaceId?: string, queryId?: string, batch?: number) { 
        this['workspace_id'] = workspaceId;
        this['query_id'] = queryId;
        this['batch'] = batch;
    }
    public withWorkspaceId(workspaceId: string): ShowAdhocResultRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withQueryId(queryId: string): ShowAdhocResultRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withBatch(batch: number): ShowAdhocResultRequest {
        this['batch'] = batch;
        return this;
    }
}