

export class InstallPluginRequestBody {
    private 'plugin_name'?: string;
    public version?: string;
    public port?: string;
    private 'obs_url'?: string;
    public constructor(pluginName?: string) { 
        this['plugin_name'] = pluginName;
    }
    public withPluginName(pluginName: string): InstallPluginRequestBody {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withVersion(version: string): InstallPluginRequestBody {
        this['version'] = version;
        return this;
    }
    public withPort(port: string): InstallPluginRequestBody {
        this['port'] = port;
        return this;
    }
    public withObsUrl(obsUrl: string): InstallPluginRequestBody {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
}