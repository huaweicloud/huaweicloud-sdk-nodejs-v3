

export class AccountPermission {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'column_name'?: string;
    private 'database_name'?: string;
    private 'datasource_type'?: AccountPermissionDatasourceTypeEnum | string;
    private 'expire_msg'?: string;
    private 'expire_status'?: AccountPermissionExpireStatusEnum | string;
    private 'expire_time'?: number;
    public id?: string;
    private 'instance_id'?: string;
    private 'member_id'?: string;
    private 'member_name'?: string;
    private 'permission_action'?: AccountPermissionPermissionActionEnum | string;
    private 'permission_action_code'?: number;
    private 'project_id'?: string;
    private 'row_level_security'?: string;
    private 'row_level_security_desc'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'workspace_id'?: string;
    public constructor(clusterId?: string, clusterName?: string, datasourceType?: string, expireStatus?: string, id?: string, instanceId?: string, projectId?: string, workspaceId?: string) { 
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
        this['datasource_type'] = datasourceType;
        this['expire_status'] = expireStatus;
        this['id'] = id;
        this['instance_id'] = instanceId;
        this['project_id'] = projectId;
        this['workspace_id'] = workspaceId;
    }
    public withClusterId(clusterId: string): AccountPermission {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): AccountPermission {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withColumnName(columnName: string): AccountPermission {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDatabaseName(databaseName: string): AccountPermission {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDatasourceType(datasourceType: AccountPermissionDatasourceTypeEnum | string): AccountPermission {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: AccountPermissionDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): AccountPermissionDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withExpireMsg(expireMsg: string): AccountPermission {
        this['expire_msg'] = expireMsg;
        return this;
    }
    public set expireMsg(expireMsg: string  | undefined) {
        this['expire_msg'] = expireMsg;
    }
    public get expireMsg(): string | undefined {
        return this['expire_msg'];
    }
    public withExpireStatus(expireStatus: AccountPermissionExpireStatusEnum | string): AccountPermission {
        this['expire_status'] = expireStatus;
        return this;
    }
    public set expireStatus(expireStatus: AccountPermissionExpireStatusEnum | string  | undefined) {
        this['expire_status'] = expireStatus;
    }
    public get expireStatus(): AccountPermissionExpireStatusEnum | string | undefined {
        return this['expire_status'];
    }
    public withExpireTime(expireTime: number): AccountPermission {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withId(id: string): AccountPermission {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): AccountPermission {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMemberId(memberId: string): AccountPermission {
        this['member_id'] = memberId;
        return this;
    }
    public set memberId(memberId: string  | undefined) {
        this['member_id'] = memberId;
    }
    public get memberId(): string | undefined {
        return this['member_id'];
    }
    public withMemberName(memberName: string): AccountPermission {
        this['member_name'] = memberName;
        return this;
    }
    public set memberName(memberName: string  | undefined) {
        this['member_name'] = memberName;
    }
    public get memberName(): string | undefined {
        return this['member_name'];
    }
    public withPermissionAction(permissionAction: AccountPermissionPermissionActionEnum | string): AccountPermission {
        this['permission_action'] = permissionAction;
        return this;
    }
    public set permissionAction(permissionAction: AccountPermissionPermissionActionEnum | string  | undefined) {
        this['permission_action'] = permissionAction;
    }
    public get permissionAction(): AccountPermissionPermissionActionEnum | string | undefined {
        return this['permission_action'];
    }
    public withPermissionActionCode(permissionActionCode: number): AccountPermission {
        this['permission_action_code'] = permissionActionCode;
        return this;
    }
    public set permissionActionCode(permissionActionCode: number  | undefined) {
        this['permission_action_code'] = permissionActionCode;
    }
    public get permissionActionCode(): number | undefined {
        return this['permission_action_code'];
    }
    public withProjectId(projectId: string): AccountPermission {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRowLevelSecurity(rowLevelSecurity: string): AccountPermission {
        this['row_level_security'] = rowLevelSecurity;
        return this;
    }
    public set rowLevelSecurity(rowLevelSecurity: string  | undefined) {
        this['row_level_security'] = rowLevelSecurity;
    }
    public get rowLevelSecurity(): string | undefined {
        return this['row_level_security'];
    }
    public withRowLevelSecurityDesc(rowLevelSecurityDesc: string): AccountPermission {
        this['row_level_security_desc'] = rowLevelSecurityDesc;
        return this;
    }
    public set rowLevelSecurityDesc(rowLevelSecurityDesc: string  | undefined) {
        this['row_level_security_desc'] = rowLevelSecurityDesc;
    }
    public get rowLevelSecurityDesc(): string | undefined {
        return this['row_level_security_desc'];
    }
    public withSchemaName(schemaName: string): AccountPermission {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): AccountPermission {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withWorkspaceId(workspaceId: string): AccountPermission {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountPermissionDatasourceTypeEnum {
    HIVE = 'HIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountPermissionExpireStatusEnum {
    REVOKE_FAILED = 'REVOKE_FAILED',
    TO_BE_REVOKE = 'TO_BE_REVOKE',
    INACTIVE = 'INACTIVE',
    PERMANENTLY_ACTIVE = 'PERMANENTLY_ACTIVE',
    ACTIVE = 'ACTIVE',
    EXPIRE_SOON = 'EXPIRE_SOON'
}
/**
    * @export
    * @enum {string}
    */
export enum AccountPermissionPermissionActionEnum {
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
