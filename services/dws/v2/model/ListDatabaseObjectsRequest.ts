

export class ListDatabaseObjectsRequest {
    private 'cluster_id'?: string;
    public type?: string;
    public name?: string;
    public database?: string;
    public schema?: string;
    public table?: string;
    public offset?: number;
    public limit?: number;
    private 'is_fine_grained_disaster'?: string;
    public constructor(clusterId?: string, type?: string) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
    }
    public withClusterId(clusterId: string): ListDatabaseObjectsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withType(type: string): ListDatabaseObjectsRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListDatabaseObjectsRequest {
        this['name'] = name;
        return this;
    }
    public withDatabase(database: string): ListDatabaseObjectsRequest {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ListDatabaseObjectsRequest {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ListDatabaseObjectsRequest {
        this['table'] = table;
        return this;
    }
    public withOffset(offset: number): ListDatabaseObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseObjectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withIsFineGrainedDisaster(isFineGrainedDisaster: string): ListDatabaseObjectsRequest {
        this['is_fine_grained_disaster'] = isFineGrainedDisaster;
        return this;
    }
    public set isFineGrainedDisaster(isFineGrainedDisaster: string  | undefined) {
        this['is_fine_grained_disaster'] = isFineGrainedDisaster;
    }
    public get isFineGrainedDisaster(): string | undefined {
        return this['is_fine_grained_disaster'];
    }
}