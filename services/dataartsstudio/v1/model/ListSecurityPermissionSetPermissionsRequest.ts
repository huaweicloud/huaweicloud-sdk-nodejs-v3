

export class ListSecurityPermissionSetPermissionsRequest {
    private 'permission_set_id'?: string;
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'permission_type'?: ListSecurityPermissionSetPermissionsRequestPermissionTypeEnum | string;
    private 'permission_action'?: ListSecurityPermissionSetPermissionsRequestPermissionActionEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'datasource_type'?: ListSecurityPermissionSetPermissionsRequestDatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    private 'sync_status'?: ListSecurityPermissionSetPermissionsRequestSyncStatusEnum | string;
    private 'order_by'?: ListSecurityPermissionSetPermissionsRequestOrderByEnum | string;
    private 'order_by_asc'?: boolean;
    public constructor(permissionSetId?: string, workspace?: string) { 
        this['permission_set_id'] = permissionSetId;
        this['workspace'] = workspace;
    }
    public withPermissionSetId(permissionSetId: string): ListSecurityPermissionSetPermissionsRequest {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withWorkspace(workspace: string): ListSecurityPermissionSetPermissionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityPermissionSetPermissionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityPermissionSetPermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withPermissionType(permissionType: ListSecurityPermissionSetPermissionsRequestPermissionTypeEnum | string): ListSecurityPermissionSetPermissionsRequest {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: ListSecurityPermissionSetPermissionsRequestPermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): ListSecurityPermissionSetPermissionsRequestPermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withPermissionAction(permissionAction: ListSecurityPermissionSetPermissionsRequestPermissionActionEnum | string): ListSecurityPermissionSetPermissionsRequest {
        this['permission_action'] = permissionAction;
        return this;
    }
    public set permissionAction(permissionAction: ListSecurityPermissionSetPermissionsRequestPermissionActionEnum | string  | undefined) {
        this['permission_action'] = permissionAction;
    }
    public get permissionAction(): ListSecurityPermissionSetPermissionsRequestPermissionActionEnum | string | undefined {
        return this['permission_action'];
    }
    public withClusterId(clusterId: string): ListSecurityPermissionSetPermissionsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListSecurityPermissionSetPermissionsRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatasourceType(datasourceType: ListSecurityPermissionSetPermissionsRequestDatasourceTypeEnum | string): ListSecurityPermissionSetPermissionsRequest {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: ListSecurityPermissionSetPermissionsRequestDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): ListSecurityPermissionSetPermissionsRequestDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): ListSecurityPermissionSetPermissionsRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ListSecurityPermissionSetPermissionsRequest {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): ListSecurityPermissionSetPermissionsRequest {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withSyncStatus(syncStatus: ListSecurityPermissionSetPermissionsRequestSyncStatusEnum | string): ListSecurityPermissionSetPermissionsRequest {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: ListSecurityPermissionSetPermissionsRequestSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): ListSecurityPermissionSetPermissionsRequestSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withOrderBy(orderBy: ListSecurityPermissionSetPermissionsRequestOrderByEnum | string): ListSecurityPermissionSetPermissionsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListSecurityPermissionSetPermissionsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListSecurityPermissionSetPermissionsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withOrderByAsc(orderByAsc: boolean): ListSecurityPermissionSetPermissionsRequest {
        this['order_by_asc'] = orderByAsc;
        return this;
    }
    public set orderByAsc(orderByAsc: boolean  | undefined) {
        this['order_by_asc'] = orderByAsc;
    }
    public get orderByAsc(): boolean | undefined {
        return this['order_by_asc'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetPermissionsRequestPermissionTypeEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetPermissionsRequestPermissionActionEnum {
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
export enum ListSecurityPermissionSetPermissionsRequestDatasourceTypeEnum {
    HIVE = 'HIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetPermissionsRequestSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPermissionSetPermissionsRequestOrderByEnum {
    CLUSTER_NAME = 'CLUSTER_NAME',
    DATABASE_NAME = 'DATABASE_NAME'
}
