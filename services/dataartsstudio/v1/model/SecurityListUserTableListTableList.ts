

export class SecurityListUserTableListTableList {
    private 'datasource_type'?: string;
    private 'cluster_id'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(datasourceType?: string, databaseName?: string, tableName?: string) { 
        this['datasource_type'] = datasourceType;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withDatasourceType(datasourceType: string): SecurityListUserTableListTableList {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): SecurityListUserTableListTableList {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatabaseName(databaseName: string): SecurityListUserTableListTableList {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): SecurityListUserTableListTableList {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): SecurityListUserTableListTableList {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}