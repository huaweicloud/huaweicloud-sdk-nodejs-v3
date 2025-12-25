

export class ListPipesRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'pipe_name_in_query'?: string;
    private 'pipe_id_in_query'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListPipesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListPipesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListPipesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListPipesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withPipeNameInQuery(pipeNameInQuery: string): ListPipesRequest {
        this['pipe_name_in_query'] = pipeNameInQuery;
        return this;
    }
    public set pipeNameInQuery(pipeNameInQuery: string  | undefined) {
        this['pipe_name_in_query'] = pipeNameInQuery;
    }
    public get pipeNameInQuery(): string | undefined {
        return this['pipe_name_in_query'];
    }
    public withPipeIdInQuery(pipeIdInQuery: string): ListPipesRequest {
        this['pipe_id_in_query'] = pipeIdInQuery;
        return this;
    }
    public set pipeIdInQuery(pipeIdInQuery: string  | undefined) {
        this['pipe_id_in_query'] = pipeIdInQuery;
    }
    public get pipeIdInQuery(): string | undefined {
        return this['pipe_id_in_query'];
    }
}