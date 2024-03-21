

export class ListSecurityDatasourceActionsRequest {
    public workspace?: string;
    private 'parent_permission_set_id'?: string;
    private 'cluster_id'?: string;
    private 'datasource_type'?: ListSecurityDatasourceActionsRequestDatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    public url?: string;
    public constructor(workspace?: string, parentPermissionSetId?: string, clusterId?: string, datasourceType?: string) { 
        this['workspace'] = workspace;
        this['parent_permission_set_id'] = parentPermissionSetId;
        this['cluster_id'] = clusterId;
        this['datasource_type'] = datasourceType;
    }
    public withWorkspace(workspace: string): ListSecurityDatasourceActionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withParentPermissionSetId(parentPermissionSetId: string): ListSecurityDatasourceActionsRequest {
        this['parent_permission_set_id'] = parentPermissionSetId;
        return this;
    }
    public set parentPermissionSetId(parentPermissionSetId: string  | undefined) {
        this['parent_permission_set_id'] = parentPermissionSetId;
    }
    public get parentPermissionSetId(): string | undefined {
        return this['parent_permission_set_id'];
    }
    public withClusterId(clusterId: string): ListSecurityDatasourceActionsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDatasourceType(datasourceType: ListSecurityDatasourceActionsRequestDatasourceTypeEnum | string): ListSecurityDatasourceActionsRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityDatasourceActionsRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityDatasourceActionsRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): ListSecurityDatasourceActionsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): ListSecurityDatasourceActionsRequest {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): ListSecurityDatasourceActionsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): ListSecurityDatasourceActionsRequest {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withUrl(url: string): ListSecurityDatasourceActionsRequest {
        this['url'] = url;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityDatasourceActionsRequestDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
