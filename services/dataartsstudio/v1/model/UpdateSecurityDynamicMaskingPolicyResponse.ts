import { DynamicMaskingPolicy } from './DynamicMaskingPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityDynamicMaskingPolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'datasource_type'?: UpdateSecurityDynamicMaskingPolicyResponseDatasourceTypeEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'table_id'?: string;
    private 'table_name'?: string;
    private 'user_groups'?: string;
    public users?: string;
    private 'conn_name'?: string;
    private 'conn_id'?: string;
    private 'sync_status'?: UpdateSecurityDynamicMaskingPolicyResponseSyncStatusEnum | string;
    private 'sync_msg'?: string;
    private 'sync_log'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    private 'schema_name'?: string;
    private 'policy_list'?: Array<DynamicMaskingPolicy>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDatasourceType(datasourceType: UpdateSecurityDynamicMaskingPolicyResponseDatasourceTypeEnum | string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: UpdateSecurityDynamicMaskingPolicyResponseDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): UpdateSecurityDynamicMaskingPolicyResponseDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableId(tableId: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withTableName(tableName: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserGroups(userGroups: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: string  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): string | undefined {
        return this['user_groups'];
    }
    public withUsers(users: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['users'] = users;
        return this;
    }
    public withConnName(connName: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['conn_name'] = connName;
        return this;
    }
    public set connName(connName: string  | undefined) {
        this['conn_name'] = connName;
    }
    public get connName(): string | undefined {
        return this['conn_name'];
    }
    public withConnId(connId: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['conn_id'] = connId;
        return this;
    }
    public set connId(connId: string  | undefined) {
        this['conn_id'] = connId;
    }
    public get connId(): string | undefined {
        return this['conn_id'];
    }
    public withSyncStatus(syncStatus: UpdateSecurityDynamicMaskingPolicyResponseSyncStatusEnum | string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: UpdateSecurityDynamicMaskingPolicyResponseSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): UpdateSecurityDynamicMaskingPolicyResponseSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncMsg(syncMsg: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
    public withSyncLog(syncLog: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['sync_log'] = syncLog;
        return this;
    }
    public set syncLog(syncLog: string  | undefined) {
        this['sync_log'] = syncLog;
    }
    public get syncLog(): string | undefined {
        return this['sync_log'];
    }
    public withCreateTime(createTime: number): UpdateSecurityDynamicMaskingPolicyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): UpdateSecurityDynamicMaskingPolicyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withSchemaName(schemaName: string): UpdateSecurityDynamicMaskingPolicyResponse {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withPolicyList(policyList: Array<DynamicMaskingPolicy>): UpdateSecurityDynamicMaskingPolicyResponse {
        this['policy_list'] = policyList;
        return this;
    }
    public set policyList(policyList: Array<DynamicMaskingPolicy>  | undefined) {
        this['policy_list'] = policyList;
    }
    public get policyList(): Array<DynamicMaskingPolicy> | undefined {
        return this['policy_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSecurityDynamicMaskingPolicyResponseDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSecurityDynamicMaskingPolicyResponseSyncStatusEnum {
    UNKNOWN = 'UNKNOWN',
    NOT_SYNC = 'NOT_SYNC',
    SYNCING = 'SYNCING',
    SYNC_SUCCESS = 'SYNC_SUCCESS',
    SYNC_FAIL = 'SYNC_FAIL',
    SYNC_PARTIAL_FAIL = 'SYNC_PARTIAL_FAIL',
    DELETE_FAIL = 'DELETE_FAIL',
    DELETING = 'DELETING',
    UPDATING = 'UPDATING',
    DATA_UPDATED = 'DATA_UPDATED'
}
