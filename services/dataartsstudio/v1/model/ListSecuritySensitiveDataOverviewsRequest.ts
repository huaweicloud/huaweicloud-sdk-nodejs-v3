

export class ListSecuritySensitiveDataOverviewsRequest {
    public workspace?: string;
    public datasource?: ListSecuritySensitiveDataOverviewsRequestDatasourceEnum | string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecuritySensitiveDataOverviewsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDatasource(datasource: ListSecuritySensitiveDataOverviewsRequestDatasourceEnum | string): ListSecuritySensitiveDataOverviewsRequest {
        this['datasource'] = datasource;
        return this;
    }
    public withClusterName(clusterName: string): ListSecuritySensitiveDataOverviewsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): ListSecuritySensitiveDataOverviewsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListSecuritySensitiveDataOverviewsRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListSecuritySensitiveDataOverviewsRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListSecuritySensitiveDataOverviewsRequestDatasourceEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
