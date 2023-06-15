

export class ShowDatabaseAuthorityRequest {
    private 'cluster_id': string | undefined;
    public type: string;
    public name: Array<string>;
    public database: string;
    public schema?: string;
    public table?: string;
    public constructor(clusterId?: any, type?: any, name?: any, database?: any) { 
        this['cluster_id'] = clusterId;
        this['type'] = type;
        this['name'] = name;
        this['database'] = database;
    }
    public withClusterId(clusterId: string): ShowDatabaseAuthorityRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withType(type: string): ShowDatabaseAuthorityRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: Array<string>): ShowDatabaseAuthorityRequest {
        this['name'] = name;
        return this;
    }
    public withDatabase(database: string): ShowDatabaseAuthorityRequest {
        this['database'] = database;
        return this;
    }
    public withSchema(schema: string): ShowDatabaseAuthorityRequest {
        this['schema'] = schema;
        return this;
    }
    public withTable(table: string): ShowDatabaseAuthorityRequest {
        this['table'] = table;
        return this;
    }
}