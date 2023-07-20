

export class GetHostListInfo {
    private 'host_id'?: string;
    private 'host_ip'?: string;
    private 'host_name'?: string;
    private 'host_status'?: GetHostListInfoHostStatusEnum | string;
    private 'host_type'?: GetHostListInfoHostTypeEnum | string;
    private 'host_version'?: string;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): GetHostListInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostIp(hostIp: string): GetHostListInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostName(hostName: string): GetHostListInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostStatus(hostStatus: GetHostListInfoHostStatusEnum | string): GetHostListInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: GetHostListInfoHostStatusEnum | string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): GetHostListInfoHostStatusEnum | string | undefined {
        return this['host_status'];
    }
    public withHostType(hostType: GetHostListInfoHostTypeEnum | string): GetHostListInfo {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: GetHostListInfoHostTypeEnum | string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): GetHostListInfoHostTypeEnum | string | undefined {
        return this['host_type'];
    }
    public withHostVersion(hostVersion: string): GetHostListInfo {
        this['host_version'] = hostVersion;
        return this;
    }
    public set hostVersion(hostVersion: string  | undefined) {
        this['host_version'] = hostVersion;
    }
    public get hostVersion(): string | undefined {
        return this['host_version'];
    }
    public withUpdateTime(updateTime: number): GetHostListInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHostListInfoHostStatusEnum {
    UNINSTALL = 'uninstall',
    RUNNING = 'running',
    OFFLINE = 'offline',
    ERROR = 'error',
    PLUGIN_ERROR = 'plugin error',
    INSTALLING = 'installing',
    INSTALL_FAIL = 'install-fail',
    UPGRADING = 'upgrading',
    UPGRADING_TRANSIENT = 'upgrading-transient',
    UPGRADE_FAILED = 'upgrade failed',
    UPGRADE_FAIL = 'upgrade-fail',
    UNINSTALLING = 'uninstalling',
    UNINSTALLING_TRANSIENT = 'uninstalling-transient',
    AUTHENTICATION_ERROR = 'authentication error'
}
/**
    * @export
    * @enum {string}
    */
export enum GetHostListInfoHostTypeEnum {
    LINUX = 'linux',
    WINDOWS = 'windows'
}
