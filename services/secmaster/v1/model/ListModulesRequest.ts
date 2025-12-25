

export class ListModulesRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: ListModulesRequestSortKeyEnum | string;
    private 'sort_dir'?: string;
    private 'module_type'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListModulesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListModulesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListModulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: ListModulesRequestSortKeyEnum | string): ListModulesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListModulesRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListModulesRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListModulesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withModuleType(moduleType: string): ListModulesRequest {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListModulesRequestSortKeyEnum {
    UPDATE_TIME = 'update_time',
    CREATE_TIME = 'create_time'
}
