

export class ListDatabaseUserAuthoritiesRequest {
    private 'cluster_id'?: string;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor(clusterId?: string, name?: string) { 
        this['cluster_id'] = clusterId;
        this['name'] = name;
    }
    public withClusterId(clusterId: string): ListDatabaseUserAuthoritiesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withName(name: string): ListDatabaseUserAuthoritiesRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListDatabaseUserAuthoritiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseUserAuthoritiesRequest {
        this['limit'] = limit;
        return this;
    }
}