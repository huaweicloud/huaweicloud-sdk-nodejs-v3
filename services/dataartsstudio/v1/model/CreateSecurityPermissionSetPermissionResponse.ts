
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityPermissionSetPermissionResponse extends SdkResponse {
    public id?: string;
    private 'permission_set_id'?: string;
    private 'project_id'?: string;
    private 'instance_id'?: string;
    private 'permission_type'?: CreateSecurityPermissionSetPermissionResponsePermissionTypeEnum | string;
    private 'permission_action'?: string;
    private 'permission_actions'?: Array<CreateSecurityPermissionSetPermissionResponsePermissionActionsEnum> | Array<string>;
    private 'permission_action_code'?: number;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'datasource_type'?: CreateSecurityPermissionSetPermissionResponseDatasourceTypeEnum | string;
    private 'database_name'?: string;
    private 'schema_name'?: string;
    public namespace?: string;
    private 'table_name'?: string;
    private 'column_name'?: string;
    private 'row_level_security'?: string;
    private 'sync_status'?: CreateSecurityPermissionSetPermissionResponseSyncStatusEnum | string;
    private 'sync_msg'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateSecurityPermissionSetPermissionResponse {
        this['id'] = id;
        return this;
    }
    public withPermissionSetId(permissionSetId: string): CreateSecurityPermissionSetPermissionResponse {
        this['permission_set_id'] = permissionSetId;
        return this;
    }
    public set permissionSetId(permissionSetId: string  | undefined) {
        this['permission_set_id'] = permissionSetId;
    }
    public get permissionSetId(): string | undefined {
        return this['permission_set_id'];
    }
    public withProjectId(projectId: string): CreateSecurityPermissionSetPermissionResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withInstanceId(instanceId: string): CreateSecurityPermissionSetPermissionResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPermissionType(permissionType: CreateSecurityPermissionSetPermissionResponsePermissionTypeEnum | string): CreateSecurityPermissionSetPermissionResponse {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: CreateSecurityPermissionSetPermissionResponsePermissionTypeEnum | string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): CreateSecurityPermissionSetPermissionResponsePermissionTypeEnum | string | undefined {
        return this['permission_type'];
    }
    public withPermissionAction(permissionAction: string): CreateSecurityPermissionSetPermissionResponse {
        this['permission_action'] = permissionAction;
        return this;
    }
    public set permissionAction(permissionAction: string  | undefined) {
        this['permission_action'] = permissionAction;
    }
    public get permissionAction(): string | undefined {
        return this['permission_action'];
    }
    public withPermissionActions(permissionActions: Array<CreateSecurityPermissionSetPermissionResponsePermissionActionsEnum> | Array<string>): CreateSecurityPermissionSetPermissionResponse {
        this['permission_actions'] = permissionActions;
        return this;
    }
    public set permissionActions(permissionActions: Array<CreateSecurityPermissionSetPermissionResponsePermissionActionsEnum> | Array<string>  | undefined) {
        this['permission_actions'] = permissionActions;
    }
    public get permissionActions(): Array<CreateSecurityPermissionSetPermissionResponsePermissionActionsEnum> | Array<string> | undefined {
        return this['permission_actions'];
    }
    public withPermissionActionCode(permissionActionCode: number): CreateSecurityPermissionSetPermissionResponse {
        this['permission_action_code'] = permissionActionCode;
        return this;
    }
    public set permissionActionCode(permissionActionCode: number  | undefined) {
        this['permission_action_code'] = permissionActionCode;
    }
    public get permissionActionCode(): number | undefined {
        return this['permission_action_code'];
    }
    public withClusterId(clusterId: string): CreateSecurityPermissionSetPermissionResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CreateSecurityPermissionSetPermissionResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatasourceType(datasourceType: CreateSecurityPermissionSetPermissionResponseDatasourceTypeEnum | string): CreateSecurityPermissionSetPermissionResponse {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: CreateSecurityPermissionSetPermissionResponseDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): CreateSecurityPermissionSetPermissionResponseDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withDatabaseName(databaseName: string): CreateSecurityPermissionSetPermissionResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSchemaName(schemaName: string): CreateSecurityPermissionSetPermissionResponse {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withNamespace(namespace: string): CreateSecurityPermissionSetPermissionResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withTableName(tableName: string): CreateSecurityPermissionSetPermissionResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnName(columnName: string): CreateSecurityPermissionSetPermissionResponse {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withRowLevelSecurity(rowLevelSecurity: string): CreateSecurityPermissionSetPermissionResponse {
        this['row_level_security'] = rowLevelSecurity;
        return this;
    }
    public set rowLevelSecurity(rowLevelSecurity: string  | undefined) {
        this['row_level_security'] = rowLevelSecurity;
    }
    public get rowLevelSecurity(): string | undefined {
        return this['row_level_security'];
    }
    public withSyncStatus(syncStatus: CreateSecurityPermissionSetPermissionResponseSyncStatusEnum | string): CreateSecurityPermissionSetPermissionResponse {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: CreateSecurityPermissionSetPermissionResponseSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): CreateSecurityPermissionSetPermissionResponseSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncMsg(syncMsg: string): CreateSecurityPermissionSetPermissionResponse {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSecurityPermissionSetPermissionResponsePermissionTypeEnum {
    DENY = 'DENY',
    ALLOW = 'ALLOW'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSecurityPermissionSetPermissionResponsePermissionActionsEnum {
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
export enum CreateSecurityPermissionSetPermissionResponseDatasourceTypeEnum {
    HIVE = 'HIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSecurityPermissionSetPermissionResponseSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL'
}
