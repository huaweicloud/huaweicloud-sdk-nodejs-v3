

export class PermissionSetPermissionCreateDTO {
    private 'dw_id'?: string;
    private 'permission_type'?: PermissionSetPermissionCreateDTOPermissionTypeEnum | string;
    private 'permission_actions'?: Array<PermissionSetPermissionCreateDTOPermissionActionsEnum> | Array<string>;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'datasource_type'?: PermissionSetPermissionCreateDTODatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    public namespace?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    private 'row_level_security'?: string;
    public url?: string;
    private 'auto_sync'?: boolean;
    public constructor() { 
    }
    public withDwId(dwId: string): PermissionSetPermissionCreateDTO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withPermissionType(permissionType: PermissionSetPermissionCreateDTOPermissionTypeEnum | string): PermissionSetPermissionCreateDTO {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: PermissionSetPermissionCreateDTOPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): PermissionSetPermissionCreateDTOPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withPermissionActions(permissionActions: Array<PermissionSetPermissionCreateDTOPermissionActionsEnum> | Array<string>): PermissionSetPermissionCreateDTO {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: Array<PermissionSetPermissionCreateDTOPermissionActionsEnum> | Array<string>  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): Array<PermissionSetPermissionCreateDTOPermissionActionsEnum> | Array<string> | undefined {
        return this['permission_actions'];
    }
    public withClusterId(clusterId: string): PermissionSetPermissionCreateDTO {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): PermissionSetPermissionCreateDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatasourceType(datasourceType: PermissionSetPermissionCreateDTODatasourceTypeEnum | string): PermissionSetPermissionCreateDTO {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: PermissionSetPermissionCreateDTODatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): PermissionSetPermissionCreateDTODatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): PermissionSetPermissionCreateDTO {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): PermissionSetPermissionCreateDTO {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withNamespace(namespace: string): PermissionSetPermissionCreateDTO {
        this['namespace'] = namespace;
        return this;
    }
    public withTableName(tableName: string): PermissionSetPermissionCreateDTO {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): PermissionSetPermissionCreateDTO {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withRowLevelSecurity(rowLevelSecurity: string): PermissionSetPermissionCreateDTO {
        this['row_level_security'] = rowLevelSecurity;
        return this;
    }
    public set rowLevelSecurity(rowLevelSecurity: string  | undefined) {
        this['row_level_security'] = rowLevelSecurity;
    }
    public get rowLevelSecurity(): string | undefined {
        return this['row_level_security'];
    }
    public withUrl(url: string): PermissionSetPermissionCreateDTO {
        this['url'] = url;
        return this;
    }
    public withAutoSync(autoSync: boolean): PermissionSetPermissionCreateDTO {
        this['auto_sync'] = autoSync;
        return this;
    }
    public set autoSync(autoSync: boolean  | undefined) {
        this['auto_sync'] = autoSync;
    }
    public get autoSync(): boolean | undefined {
        return this['auto_sync'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PermissionSetPermissionCreateDTOPermissionTypeEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
/**
    * @export
    * @enum {string}
    */
export enum PermissionSetPermissionCreateDTOPermissionActionsEnum {
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
/**
    * @export
    * @enum {string}
    */
export enum PermissionSetPermissionCreateDTODatasourceTypeEnum {
    HIVE = 'HIVE'
}
