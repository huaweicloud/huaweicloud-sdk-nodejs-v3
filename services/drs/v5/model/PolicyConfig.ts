

export class PolicyConfig {
    private 'filter_ddl_policy'?: PolicyConfigFilterDdlPolicyEnum | string;
    private 'conflict_policy'?: PolicyConfigConflictPolicyEnum | string;
    private 'index_trans'?: boolean;
    private 'ddl_trans'?: boolean;
    private 'data_sync_topology_type'?: PolicyConfigDataSyncTopologyTypeEnum | string;
    private 'support_ddl_info'?: PolicyConfigSupportDdlInfoEnum | string;
    private 'sync_type_policy'?: string;
    private 'increment_read_mode'?: string;
    public constructor() { 
    }
    public withFilterDdlPolicy(filterDdlPolicy: PolicyConfigFilterDdlPolicyEnum | string): PolicyConfig {
        this['filter_ddl_policy'] = filterDdlPolicy;
        return this;
    }
    public set filterDdlPolicy(filterDdlPolicy: PolicyConfigFilterDdlPolicyEnum | string  | undefined) {
        this['filter_ddl_policy'] = filterDdlPolicy;
    }
    public get filterDdlPolicy(): PolicyConfigFilterDdlPolicyEnum | string | undefined {
        return this['filter_ddl_policy'];
    }
    public withConflictPolicy(conflictPolicy: PolicyConfigConflictPolicyEnum | string): PolicyConfig {
        this['conflict_policy'] = conflictPolicy;
        return this;
    }
    public set conflictPolicy(conflictPolicy: PolicyConfigConflictPolicyEnum | string  | undefined) {
        this['conflict_policy'] = conflictPolicy;
    }
    public get conflictPolicy(): PolicyConfigConflictPolicyEnum | string | undefined {
        return this['conflict_policy'];
    }
    public withIndexTrans(indexTrans: boolean): PolicyConfig {
        this['index_trans'] = indexTrans;
        return this;
    }
    public set indexTrans(indexTrans: boolean  | undefined) {
        this['index_trans'] = indexTrans;
    }
    public get indexTrans(): boolean | undefined {
        return this['index_trans'];
    }
    public withDdlTrans(ddlTrans: boolean): PolicyConfig {
        this['ddl_trans'] = ddlTrans;
        return this;
    }
    public set ddlTrans(ddlTrans: boolean  | undefined) {
        this['ddl_trans'] = ddlTrans;
    }
    public get ddlTrans(): boolean | undefined {
        return this['ddl_trans'];
    }
    public withDataSyncTopologyType(dataSyncTopologyType: PolicyConfigDataSyncTopologyTypeEnum | string): PolicyConfig {
        this['data_sync_topology_type'] = dataSyncTopologyType;
        return this;
    }
    public set dataSyncTopologyType(dataSyncTopologyType: PolicyConfigDataSyncTopologyTypeEnum | string  | undefined) {
        this['data_sync_topology_type'] = dataSyncTopologyType;
    }
    public get dataSyncTopologyType(): PolicyConfigDataSyncTopologyTypeEnum | string | undefined {
        return this['data_sync_topology_type'];
    }
    public withSupportDdlInfo(supportDdlInfo: PolicyConfigSupportDdlInfoEnum | string): PolicyConfig {
        this['support_ddl_info'] = supportDdlInfo;
        return this;
    }
    public set supportDdlInfo(supportDdlInfo: PolicyConfigSupportDdlInfoEnum | string  | undefined) {
        this['support_ddl_info'] = supportDdlInfo;
    }
    public get supportDdlInfo(): PolicyConfigSupportDdlInfoEnum | string | undefined {
        return this['support_ddl_info'];
    }
    public withSyncTypePolicy(syncTypePolicy: string): PolicyConfig {
        this['sync_type_policy'] = syncTypePolicy;
        return this;
    }
    public set syncTypePolicy(syncTypePolicy: string  | undefined) {
        this['sync_type_policy'] = syncTypePolicy;
    }
    public get syncTypePolicy(): string | undefined {
        return this['sync_type_policy'];
    }
    public withIncrementReadMode(incrementReadMode: string): PolicyConfig {
        this['increment_read_mode'] = incrementReadMode;
        return this;
    }
    public set incrementReadMode(incrementReadMode: string  | undefined) {
        this['increment_read_mode'] = incrementReadMode;
    }
    public get incrementReadMode(): string | undefined {
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
