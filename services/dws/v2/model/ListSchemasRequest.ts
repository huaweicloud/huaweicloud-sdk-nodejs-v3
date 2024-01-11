

export class ListSchemasRequest {
    private 'cluster_id'?: string;
    private 'database_name'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public keywords?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string, databaseName?: string) { 
        this['cluster_id'] = clusterId;
        this['database_name'] = databaseName;
    }
    public withClusterId(clusterId: string): ListSchemasRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatabaseName(databaseName: string): ListSchemasRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSortKey(sortKey: string): ListSchemasRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListSchemasRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withKeywords(keywords: string): ListSchemasRequest {
        this['keywords'] = keywords;
        return this;
    }
    public withLimit(limit: number): ListSchemasRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSchemasRequest {
        this['offset'] = offset;
        return this;
    }
}