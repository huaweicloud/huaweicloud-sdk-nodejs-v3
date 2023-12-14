

export class ListServersRequest {
    public state?: ListServersRequestStateEnum | string;
    public name?: string;
    public id?: string;
    public ip?: string;
    public migproject?: string;
    public limit?: number;
    public offset?: number;
    private 'migration_cycle'?: ListServersRequestMigrationCycleEnum | string;
    public connected?: boolean;
    private 'enterprise_project_id'?: string;
    private 'is_consistency_result_exist'?: boolean;
    public constructor() { 
    }
    public withState(state: ListServersRequestStateEnum | string): ListServersRequest {
        this['state'] = state;
        return this;
    }
    public withName(name: string): ListServersRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListServersRequest {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): ListServersRequest {
        this['ip'] = ip;
        return this;
    }
    public withMigproject(migproject: string): ListServersRequest {
        this['migproject'] = migproject;
        return this;
    }
    public withLimit(limit: number): ListServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withMigrationCycle(migrationCycle: ListServersRequestMigrationCycleEnum | string): ListServersRequest {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: ListServersRequestMigrationCycleEnum | string  | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle(): ListServersRequestMigrationCycleEnum | string | undefined {
        return this['migration_cycle'];
    }
    public withConnected(connected: boolean): ListServersRequest {
        this['connected'] = connected;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsConsistencyResultExist(isConsistencyResultExist: boolean): ListServersRequest {
        this['is_consistency_result_exist'] = isConsistencyResultExist;
        return this;
    }
    public set isConsistencyResultExist(isConsistencyResultExist: boolean  | undefined) {
        this['is_consistency_result_exist'] = isConsistencyResultExist;
    }
    public get isConsistencyResultExist(): boolean | undefined {
        return this['is_consistency_result_exist'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServersRequestStateEnum {
    UNAVAILABLE = 'unavailable',
    WAITING = 'waiting',
    INITIALIZE = 'initialize',
    REPLICATE = 'replicate',
    SYNCING = 'syncing',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    DELETING = 'deleting',
    ERROR = 'error',
    CLONING = 'cloning',
    CUTOVERING = 'cutovering',
    FINISHED = 'finished'
}
/**
    * @export
    * @enum {string}
    */
export enum ListServersRequestMigrationCycleEnum {
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing',
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered'
}
