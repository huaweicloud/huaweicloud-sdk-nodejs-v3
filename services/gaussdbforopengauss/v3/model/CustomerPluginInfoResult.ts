

export class CustomerPluginInfoResult {
    private 'plugin_name'?: string;
    public installed?: boolean;
    public port?: string;
    private 'plugin_version'?: string;
    public constructor() { 
    }
    public withPluginName(pluginName: string): CustomerPluginInfoResult {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withInstalled(installed: boolean): CustomerPluginInfoResult {
        this['installed'] = installed;
        return this;
    }
    public withPort(port: string): CustomerPluginInfoResult {
        this['port'] = port;
        return this;
    }
    public withPluginVersion(pluginVersion: string): CustomerPluginInfoResult {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
}