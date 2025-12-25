

export class ListPipesRequest {
    private 'workspace_id'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'pipe_type'?: ListPipesRequestPipeTypeEnum | string;
    public offset?: number;
    public limit?: number;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
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
    public withDataspaceId(dataspaceId: string): ListPipesRequest {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): ListPipesRequest {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): ListPipesRequest {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeType(pipeType: ListPipesRequestPipeTypeEnum | string): ListPipesRequest {
        this['pipe_type'] = pipeType;
        return this;
    }
    public set pipeType(pipeType: ListPipesRequestPipeTypeEnum | string  | undefined) {
        this['pipe_type'] = pipeType;
    }
    public get pipeType(): ListPipesRequestPipeTypeEnum | string | undefined {
        return this['pipe_type'];
    }
    public withOffset(offset: number): ListPipesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipesRequest {
        this['limit'] = limit;
        return this;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListPipesRequestPipeTypeEnum {
    SYSTEM_DEFINED = 'system-defined',
    USER_DEFINED = 'user-defined'
}
