

export class DynamicMaskingPolicySet {
    public id?: string;
    public name?: string;
    private 'datasource_type'?: DynamicMaskingPolicySetDatasourceTypeEnum | string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'database_name'?: string;
    private 'table_name'?: string;
    private 'user_groups'?: string;
    public users?: string;
    private 'sync_status'?: DynamicMaskingPolicySetSyncStatusEnum | string;
    private 'sync_time'?: number;
    private 'sync_msg'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public constructor() { 
    }
    public withId(id: string): DynamicMaskingPolicySet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DynamicMaskingPolicySet {
        this['name'] = name;
        return this;
    }
    public withDatasourceType(datasourceType: DynamicMaskingPolicySetDatasourceTypeEnum | string): DynamicMaskingPolicySet {
        this['datasource_type'] = datasourceType;
        return this;
    }
    public set datasourceType(datasourceType: DynamicMaskingPolicySetDatasourceTypeEnum | string  | undefined) {
        this['datasource_type'] = datasourceType;
    }
    public get datasourceType(): DynamicMaskingPolicySetDatasourceTypeEnum | string | undefined {
        return this['datasource_type'];
    }
    public withClusterId(clusterId: string): DynamicMaskingPolicySet {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): DynamicMaskingPolicySet {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDatabaseName(databaseName: string): DynamicMaskingPolicySet {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): DynamicMaskingPolicySet {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withUserGroups(userGroups: string): DynamicMaskingPolicySet {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: string  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): string | undefined {
        return this['user_groups'];
    }
    public withUsers(users: string): DynamicMaskingPolicySet {
        this['users'] = users;
        return this;
    }
    public withSyncStatus(syncStatus: DynamicMaskingPolicySetSyncStatusEnum | string): DynamicMaskingPolicySet {
        this['sync_status'] = syncStatus;
        return this;
    }
    public set syncStatus(syncStatus: DynamicMaskingPolicySetSyncStatusEnum | string  | undefined) {
        this['sync_status'] = syncStatus;
    }
    public get syncStatus(): DynamicMaskingPolicySetSyncStatusEnum | string | undefined {
        return this['sync_status'];
    }
    public withSyncTime(syncTime: number): DynamicMaskingPolicySet {
        this['sync_time'] = syncTime;
        return this;
    }
    public set syncTime(syncTime: number  | undefined) {
        this['sync_time'] = syncTime;
    }
    public get syncTime(): number | undefined {
        return this['sync_time'];
    }
    public withSyncMsg(syncMsg: string): DynamicMaskingPolicySet {
        this['sync_msg'] = syncMsg;
        return this;
    }
    public set syncMsg(syncMsg: string  | undefined) {
        this['sync_msg'] = syncMsg;
    }
    public get syncMsg(): string | undefined {
        return this['sync_msg'];
    }
    public withCreateTime(createTime: number): DynamicMaskingPolicySet {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): DynamicMaskingPolicySet {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): DynamicMaskingPolicySet {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): DynamicMaskingPolicySet {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DynamicMaskingPolicySetDatasourceTypeEnum {
    HIVE = 'HIVE',
    DWS = 'DWS',
    DLI = 'DLI'
}
/**
    * @export
    * @enum {string}
    */
export enum DynamicMaskingPolicySetSyncStatusEnum {
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
