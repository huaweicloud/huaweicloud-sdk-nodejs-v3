

export class ListDatabaseUserRolesRequest {
    private 'cluster_id'?: string;
    public name?: string;
    private 'query_all'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(clusterId?: string, name?: string) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): ListDatabaseUserRolesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withName(name: string): ListDatabaseUserRolesRequest {
        this['name'] = name;
        return this;
    }
    public withQueryAll(queryAll: string): ListDatabaseUserRolesRequest {
        this['query_all'] = queryAll;
        return this;
    }
    public set queryAll(queryAll: string  | undefined) {
        this['query_all'] = queryAll;
    }
    public get queryAll(): string | undefined {
        return this['query_all'];
    }
    public withOffset(offset: string): ListDatabaseUserRolesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListDatabaseUserRolesRequest {
        this['limit'] = limit;
        return this;
    }
}