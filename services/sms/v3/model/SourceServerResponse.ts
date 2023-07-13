

export class SourceServerResponse {
    public id?: string;
    public ip: string;
    public name: string;
    private 'os_type': SourceServerResponseOsTypeEnum | undefined;
    private 'os_version'?: string | undefined;
    private 'oem_system'?: boolean | undefined;
    public state?: SourceServerResponseStateEnum;
    private 'migration_cycle'?: SourceServerResponseMigrationCycleEnum | undefined;
    public constructor(ip?: any, name?: any, osType?: any) { 
        this['ip'] = ip;
        this['name'] = name;
        this['os_type'] = osType;
    }
    public withId(id: string): SourceServerResponse {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): SourceServerResponse {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): SourceServerResponse {
        this['name'] = name;
        return this;
    }
    public withOsType(osType: SourceServerResponseOsTypeEnum): SourceServerResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: SourceServerResponseOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): SourceServerResponse {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withOemSystem(oemSystem: boolean): SourceServerResponse {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem() {
        return this['oem_system'];
    }
    public withState(state: SourceServerResponseStateEnum): SourceServerResponse {
        this['state'] = state;
        return this;
    }
    public withMigrationCycle(migrationCycle: SourceServerResponseMigrationCycleEnum): SourceServerResponse {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: SourceServerResponseMigrationCycleEnum | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle() {
        return this['migration_cycle'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceServerResponseOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceServerResponseStateEnum {
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
    TESTING = 'testing',
    FINISHED = 'finished'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceServerResponseMigrationCycleEnum {
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
