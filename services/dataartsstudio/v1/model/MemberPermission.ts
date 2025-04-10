

export class MemberPermission {
    private 'permission_set_id'?: string;
    private 'permission_source'?: string;
    private 'permission_actions'?: MemberPermissionPermissionActionsEnum | string;
    public url?: string;
    private 'datasource_type'?: string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    public constructor(permissionSetId?: string, permissionSource?: string, permissionActions?: string, datasourceType?: string, clusterName?: string, databaseName?: string, tableName?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['permission_source'] = permissionSource;
        this['permission_actions'] = permissionActions;
        this['datasource_type'] = datasourceType;
        this['cluster_name'] = clusterName;
        this['database_name'] = databaseName;
        this['table_name'] = tableName;
    }
    public withPermissionSetId(permissionSetId: string): MemberPermission {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withPermissionSource(permissionSource: string): MemberPermission {
        this['permission_source'] = permissionSource;
        return this;
    }
    public set permissionSource(permissionSource: string  | undefined) {
        this['permission_source'] = permissionSource;
    }
    public get permissionSource(): string | undefined {
        return this['permission_source'];
    }
    public withPermissionActions(permissionActions: MemberPermissionPermissionActionsEnum | string): MemberPermission {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: MemberPermissionPermissionActionsEnum | string  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): MemberPermissionPermissionActionsEnum | string | undefined {
        return this['permission_actions'];
    }
    public withUrl(url: string): MemberPermission {
        this['url'] = url;
        return this;
    }
    public withDatasourceType(datasourceType: string): MemberPermission {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): string | undefined {
        return this['datasource_type'];
    }
    public withClusterName(clusterName: string): MemberPermission {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): MemberPermission {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): MemberPermission {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): MemberPermission {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): MemberPermission {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MemberPermissionPermissionActionsEnum {
    ALL = 'ALL',
    SELECT = 'SELECT',
    UPDATE = 'UPDATE',
    CREATE = 'CREATE',
    DROP = 'DROP',
    ALTER = 'ALTER',
    INDEX = 'INDEX',
    LOCK = 'LOCK',
    READ = 'READ',
    WRITE = 'WRITE'
}
