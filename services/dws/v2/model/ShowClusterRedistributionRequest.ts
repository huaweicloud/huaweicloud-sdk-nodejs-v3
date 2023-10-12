

export class ShowClusterRedistributionRequest {
    private 'cluster_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'db_name'?: string;
    private 'table_name'?: string;
    public type?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowClusterRedistributionRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ShowClusterRedistributionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowClusterRedistributionRequest {
        this['offset'] = offset;
        return this;
    }
    public withDbName(dbName: string): ShowClusterRedistributionRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTableName(tableName: string): ShowClusterRedistributionRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withType(type: string): ShowClusterRedistributionRequest {
        this['type'] = type;
        return this;
    }
}