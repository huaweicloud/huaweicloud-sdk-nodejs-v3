

export class PolicyConfig {
    private 'filter_ddl_policy'?: PolicyConfigFilterDdlPolicyEnum | undefined;
    private 'conflict_policy'?: PolicyConfigConflictPolicyEnum | undefined;
    private 'index_trans'?: boolean | undefined;
    private 'ddl_trans'?: boolean | undefined;
    private 'data_sync_topology_type'?: PolicyConfigDataSyncTopologyTypeEnum | undefined;
    private 'support_ddl_info'?: PolicyConfigSupportDdlInfoEnum | undefined;
    private 'sync_type_policy'?: string | undefined;
    private 'increment_read_mode'?: string | undefined;
    public constructor() { 
    }
    public withFilterDdlPolicy(filterDdlPolicy: PolicyConfigFilterDdlPolicyEnum): PolicyConfig {
        this['filter_ddl_policy'] = filterDdlPolicy;
        return this;
    }
    public set filterDdlPolicy(filterDdlPolicy: PolicyConfigFilterDdlPolicyEnum | undefined) {
        this['filter_ddl_policy'] = filterDdlPolicy;
    }
    public get filterDdlPolicy() {
        return this['filter_ddl_policy'];
    }
    public withConflictPolicy(conflictPolicy: PolicyConfigConflictPolicyEnum): PolicyConfig {
        this['conflict_policy'] = conflictPolicy;
        return this;
    }
    public set conflictPolicy(conflictPolicy: PolicyConfigConflictPolicyEnum | undefined) {
        this['conflict_policy'] = conflictPolicy;
    }
    public get conflictPolicy() {
        return this['conflict_policy'];
    }
    public withIndexTrans(indexTrans: boolean): PolicyConfig {
        this['index_trans'] = indexTrans;
        return this;
    }
    public set indexTrans(indexTrans: boolean | undefined) {
        this['index_trans'] = indexTrans;
    }
    public get indexTrans() {
        return this['index_trans'];
    }
    public withDdlTrans(ddlTrans: boolean): PolicyConfig {
        this['ddl_trans'] = ddlTrans;
        return this;
    }
    public set ddlTrans(ddlTrans: boolean | undefined) {
        this['ddl_trans'] = ddlTrans;
    }
    public get ddlTrans() {
        return this['ddl_trans'];
    }
    public withDataSyncTopologyType(dataSyncTopologyType: PolicyConfigDataSyncTopologyTypeEnum): PolicyConfig {
        this['data_sync_topology_type'] = dataSyncTopologyType;
        return this;
    }
    public set dataSyncTopologyType(dataSyncTopologyType: PolicyConfigDataSyncTopologyTypeEnum | undefined) {
        this['data_sync_topology_type'] = dataSyncTopologyType;
    }
    public get dataSyncTopologyType() {
        return this['data_sync_topology_type'];
    }
    public withSupportDdlInfo(supportDdlInfo: PolicyConfigSupportDdlInfoEnum): PolicyConfig {
        this['support_ddl_info'] = supportDdlInfo;
        return this;
    }
    public set supportDdlInfo(supportDdlInfo: PolicyConfigSupportDdlInfoEnum | undefined) {
        this['support_ddl_info'] = supportDdlInfo;
    }
    public get supportDdlInfo() {
        return this['support_ddl_info'];
    }
    public withSyncTypePolicy(syncTypePolicy: string): PolicyConfig {
        this['sync_type_policy'] = syncTypePolicy;
        return this;
    }
    public set syncTypePolicy(syncTypePolicy: string | undefined) {
        this['sync_type_policy'] = syncTypePolicy;
    }
    public get syncTypePolicy() {
        return this['sync_type_policy'];
    }
    public withIncrementReadMode(incrementReadMode: string): PolicyConfig {
        this['increment_read_mode'] = incrementReadMode;
        return this;
    }
    public set incrementReadMode(incrementReadMode: string | undefined) {
        this['increment_read_mode'] = incrementReadMode;
    }
    public get incrementReadMode() {
        return this['increment_read_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyConfigFilterDdlPolicyEnum {
    DROP_DATABASE = 'drop_database'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyConfigConflictPolicyEnum {
    IGNORE = 'ignore',
    STOP = 'stop',
    OVERWRITE = 'overwrite'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyConfigDataSyncTopologyTypeEnum {
    ONE2ONE = 'one2one',
    ONE2MANY = 'one2many',
    MANY2ONE = 'many2one'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyConfigSupportDdlInfoEnum {
    CREATE_TABLE = 'CREATE_TABLE',
    ADD_COLUMN = 'ADD_COLUMN',
    MODIFY_COLUMN = 'MODIFY_COLUMN',
    CHANGE_COLUMN = 'CHANGE_COLUMN',
    DROP_INDEX = 'DROP_INDEX',
    ADD_INDEX = 'ADD_INDEX',
    CREATE_INDEX = 'CREATE_INDEX',
    RENAME_INDEX = 'RENAME_INDEX'
}
