

export class ListTablesRequest {
    private 'workspace_id'?: string;
    public category?: ListTablesRequestCategoryEnum | string;
    private 'table_id'?: string;
    private 'table_alias'?: string;
    private 'table_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public exists?: boolean;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListTablesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCategory(category: ListTablesRequestCategoryEnum | string): ListTablesRequest {
        this['category'] = category;
        return this;
    }
    public withTableId(tableId: string): ListTablesRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableAlias(tableAlias: string): ListTablesRequest {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withTableName(tableName: string): ListTablesRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withOffset(offset: number): ListTablesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListTablesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListTablesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withExists(exists: boolean): ListTablesRequest {
        this['exists'] = exists;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTablesRequestCategoryEnum {
    STREAMING = 'STREAMING',
    INDEX = 'INDEX',
    APPLICATION = 'APPLICATION',
    TENANT_BUCKET = 'TENANT_BUCKET',
    LAKE = 'LAKE'
}
