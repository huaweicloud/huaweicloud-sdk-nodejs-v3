

export class SourceServerAssociatedWithTask {
    public id?: string;
    public ip: string;
    public name: string;
    private 'os_type': SourceServerAssociatedWithTaskOsTypeEnum | undefined;
    private 'os_version'?: string | undefined;
    private 'oem_system'?: boolean | undefined;
    public state?: SourceServerAssociatedWithTaskStateEnum;
    public constructor(ip?: any, name?: any, osType?: any) { 
        this['ip'] = ip;
        this['name'] = name;
        this['os_type'] = osType;
    }
    public withId(id: string): SourceServerAssociatedWithTask {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): SourceServerAssociatedWithTask {
        this['ip'] = ip;
        return this;
    }
    public withName(name: string): SourceServerAssociatedWithTask {
        this['name'] = name;
        return this;
    }
    public withOsType(osType: SourceServerAssociatedWithTaskOsTypeEnum): SourceServerAssociatedWithTask {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: SourceServerAssociatedWithTaskOsTypeEnum | undefined) {
        this['os_type'] = osType;
    }
    public get osType() {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): SourceServerAssociatedWithTask {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion() {
        return this['os_version'];
    }
    public withOemSystem(oemSystem: boolean): SourceServerAssociatedWithTask {
        this['oem_system'] = oemSystem;
        return this;
    }
    public set oemSystem(oemSystem: boolean | undefined) {
        this['oem_system'] = oemSystem;
    }
    public get oemSystem() {
        return this['oem_system'];
    }
    public withState(state: SourceServerAssociatedWithTaskStateEnum): SourceServerAssociatedWithTask {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceServerAssociatedWithTaskOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceServerAssociatedWithTaskStateEnum {
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
