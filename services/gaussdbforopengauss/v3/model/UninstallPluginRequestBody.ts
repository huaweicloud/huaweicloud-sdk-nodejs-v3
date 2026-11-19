

export class UninstallPluginRequestBody {
    private 'plugin_name'?: string;
    public constructor(pluginName?: string) { 
        this['plugin_name'] = pluginName;
    }
    public withPluginName(pluginName: string): UninstallPluginRequestBody {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
}