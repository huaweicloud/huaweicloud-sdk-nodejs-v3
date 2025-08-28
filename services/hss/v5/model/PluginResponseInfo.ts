

export class PluginResponseInfo {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'os_type'?: string;
    private 'plugin_name'?: string;
    private 'plugin_version'?: string;
    private 'plugin_status'?: string;
    private 'upgrade_status'?: string;
    public constructor() { 
    }
    public withHostName(hostName: string): PluginResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): PluginResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): PluginResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): PluginResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withOsType(osType: string): PluginResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPluginName(pluginName: string): PluginResponseInfo {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginVersion(pluginVersion: string): PluginResponseInfo {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withPluginStatus(pluginStatus: string): PluginResponseInfo {
        this['plugin_status'] = pluginStatus;
        return this;
    }
    public set pluginStatus(pluginStatus: string  | undefined) {
        this['plugin_status'] = pluginStatus;
    }
    public get pluginStatus(): string | undefined {
        return this['plugin_status'];
    }
    public withUpgradeStatus(upgradeStatus: string): PluginResponseInfo {
        this['upgrade_status'] = upgradeStatus;
        return this;
    }
    public set upgradeStatus(upgradeStatus: string  | undefined) {
        this['upgrade_status'] = upgradeStatus;
    }
    public get upgradeStatus(): string | undefined {
        return this['upgrade_status'];
    }
}