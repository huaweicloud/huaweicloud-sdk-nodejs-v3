

export class ListRedistributionSchemaRequest {
    private 'cluster_id'?: string;
    private 'db_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'schema_name'?: string;
    public constructor(clusterId?: string, dbName?: string) { 
        this['cluster_id'] = clusterId;
        this['db_name'] = dbName;
    }
    public withClusterId(clusterId: string): ListRedistributionSchemaRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDbName(dbName: string): ListRedistributionSchemaRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withLimit(limit: number): ListRedistributionSchemaRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRedistributionSchemaRequest {
        this['offset'] = offset;
        return this;
    }
    public withSchemaName(schemaName: string): ListRedistributionSchemaRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
}