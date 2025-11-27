

export class SourceServerResponse {
    public id?: string;
    public ip?: string;
    public name?: string;
    private 'os_type'?: SourceServerResponseOsTypeEnum | string;
    private 'os_version'?: string;
    private 'oem_system'?: boolean;
    public state?: SourceServerResponseStateEnum | string;
    private 'migration_cycle'?: SourceServerResponseMigrationCycleEnum | string;
    public constructor(ip?: string, name?: string, osType?: string) { 
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
    public withOsType(osType: SourceServerResponseOsTypeEnum | string): SourceServerResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: SourceServerResponseOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): SourceServerResponseOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): SourceServerResponse {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withOemSystem(oemSystem: boolean): SourceServerResponse {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean  | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem(): boolean | undefined {
        return this['oem_system'];
    }
    public withState(state: SourceServerResponseStateEnum | string): SourceServerResponse {
        this['state'] = state;
        return this;
    }
    public withMigrationCycle(migrationCycle: SourceServerResponseMigrationCycleEnum | string): SourceServerResponse {
        this['migration_cycle'] = migrationCycle;
        return this;
    }
    public set migrationCycle(migrationCycle: SourceServerResponseMigrationCycleEnum | string  | undefined) {
        this['migration_cycle'] = migrationCycle;
    }
    public get migrationCycle(): SourceServerResponseMigrationCycleEnum | string | undefined {
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
    SKIPPING = 'skipping',
    DELETING = 'deleting',
    CLEARING = 'clearing',
    CLEARED = 'cleared',
    CLEARFAILED = 'clearfailed',
    PREMIGREADY = 'premigready',
    PREMIGED = 'premiged',
    PREMIGFAILED = 'premigfailed',
    CLONING = 'cloning',
    CUTOVERING = 'cutovering',
    FINISHED = 'finished',
    ERROR = 'error'
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
