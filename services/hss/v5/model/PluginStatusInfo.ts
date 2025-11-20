

export class PluginStatusInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'host_type'?: PluginStatusInfoHostTypeEnum | string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'host_status'?: PluginStatusInfoHostStatusEnum | string;
    private 'agent_status'?: PluginStatusInfoAgentStatusEnum | string;
    private 'agent_version'?: string;
    private 'asset_value'?: PluginStatusInfoAssetValueEnum | string;
    private 'os_type'?: PluginStatusInfoOsTypeEnum | string;
    private 'os_arch'?: PluginStatusInfoOsArchEnum | string;
    private 'os_name'?: string;
    private 'os_version'?: string;
    private 'plugin_status'?: PluginStatusInfoPluginStatusEnum | string;
    private 'plugin_version'?: string;
    private 'status_detail'?: string;
    private 'install_progress'?: string;
    private 'remaining_time'?: string;
    private 'protect_status'?: PluginStatusInfoProtectStatusEnum | string;
    public constructor() { 
    }
    public withHostId(hostId: string): PluginStatusInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): PluginStatusInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostType(hostType: PluginStatusInfoHostTypeEnum | string): PluginStatusInfo {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: PluginStatusInfoHostTypeEnum | string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): PluginStatusInfoHostTypeEnum | string | undefined {
        return this['host_type'];
    }
    public withPrivateIp(privateIp: string): PluginStatusInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): PluginStatusInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withHostStatus(hostStatus: PluginStatusInfoHostStatusEnum | string): PluginStatusInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: PluginStatusInfoHostStatusEnum | string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): PluginStatusInfoHostStatusEnum | string | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: PluginStatusInfoAgentStatusEnum | string): PluginStatusInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: PluginStatusInfoAgentStatusEnum | string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): PluginStatusInfoAgentStatusEnum | string | undefined {
        return this['agent_status'];
    }
    public withAgentVersion(agentVersion: string): PluginStatusInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withAssetValue(assetValue: PluginStatusInfoAssetValueEnum | string): PluginStatusInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: PluginStatusInfoAssetValueEnum | string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): PluginStatusInfoAssetValueEnum | string | undefined {
        return this['asset_value'];
    }
    public withOsType(osType: PluginStatusInfoOsTypeEnum | string): PluginStatusInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: PluginStatusInfoOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): PluginStatusInfoOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsArch(osArch: PluginStatusInfoOsArchEnum | string): PluginStatusInfo {
        this['os_arch'] = osArch;
        return this;
    }
    public set osArch(osArch: PluginStatusInfoOsArchEnum | string  | undefined) {
        this['os_arch'] = osArch;
    }
    public get osArch(): PluginStatusInfoOsArchEnum | string | undefined {
        return this['os_arch'];
    }
    public withOsName(osName: string): PluginStatusInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withOsVersion(osVersion: string): PluginStatusInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withPluginStatus(pluginStatus: PluginStatusInfoPluginStatusEnum | string): PluginStatusInfo {
        this['plugin_status'] = pluginStatus;
        return this;
    }
    public set pluginStatus(pluginStatus: PluginStatusInfoPluginStatusEnum | string  | undefined) {
        this['plugin_status'] = pluginStatus;
    }
    public get pluginStatus(): PluginStatusInfoPluginStatusEnum | string | undefined {
        return this['plugin_status'];
    }
    public withPluginVersion(pluginVersion: string): PluginStatusInfo {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withStatusDetail(statusDetail: string): PluginStatusInfo {
        this['status_detail'] = statusDetail;
        return this;
    }
    public set statusDetail(statusDetail: string  | undefined) {
        this['status_detail'] = statusDetail;
    }
    public get statusDetail(): string | undefined {
        return this['status_detail'];
    }
    public withInstallProgress(installProgress: string): PluginStatusInfo {
        this['install_progress'] = installProgress;
        return this;
    }
    public set installProgress(installProgress: string  | undefined) {
        this['install_progress'] = installProgress;
    }
    public get installProgress(): string | undefined {
        return this['install_progress'];
    }
    public withRemainingTime(remainingTime: string): PluginStatusInfo {
        this['remaining_time'] = remainingTime;
        return this;
    }
    public set remainingTime(remainingTime: string  | undefined) {
        this['remaining_time'] = remainingTime;
    }
    public get remainingTime(): string | undefined {
        return this['remaining_time'];
    }
    public withProtectStatus(protectStatus: PluginStatusInfoProtectStatusEnum | string): PluginStatusInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: PluginStatusInfoProtectStatusEnum | string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): PluginStatusInfoProtectStatusEnum | string | undefined {
        return this['protect_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoHostTypeEnum {
    HOST = 'host',
    CONTAINER = 'container'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoHostStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILDING = 'BUILDING',
    ERROR = 'ERROR',
    SHUTOFF = 'SHUTOFF'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoAgentStatusEnum {
    NOT_INSTALLED = 'not_installed',
    ONLINE = 'online',
    OFFLINE = 'offline',
    INSTALL_FAILED = 'install_failed',
    INSTALLING = 'installing'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoAssetValueEnum {
    COMMON = 'common',
    IMPORTANT = 'important',
    TEST = 'test'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoOsArchEnum {
    X86_64 = 'x86_64',
    ARM = 'arm'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoPluginStatusEnum {
    NOT_INSTALLED = 'not_installed',
    INSTALLING = 'installing',
    INSTALL_FAIL = 'install_fail',
    STARTING = 'starting',
    RUNNING = 'running',
    START_FAIL = 'start_fail',
    OFFLINE = 'offline',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    UPDATING = 'updating',
    UPDATE_FAIL = 'update_fail',
    UNINSTALLING = 'uninstalling',
    UNINSTALL_FAIL = 'uninstall_fail'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginStatusInfoProtectStatusEnum {
    CLOSED = 'closed',
    OPENED = 'opened'
}
