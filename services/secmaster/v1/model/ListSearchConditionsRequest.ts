

export class ListSearchConditionsRequest {
    private 'workspace_id'?: string;
    private 'pipe_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string, pipeId?: string) { 
        this['workspace_id'] = workspaceId;
        this['pipe_id'] = pipeId;
    }
    public withWorkspaceId(workspaceId: string): ListSearchConditionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPipeId(pipeId: string): ListSearchConditionsRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withOffset(offset: number): ListSearchConditionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSearchConditionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListSearchConditionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListSearchConditionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}