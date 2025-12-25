

export class PluginConfig {
    private 'plugin_id'?: string;
    public config?: { [key: string]: object; };
    public constructor() { 
    }
    public withPluginId(pluginId: string): PluginConfig {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withConfig(config: { [key: string]: object; }): PluginConfig {
        this['config'] = config;
        return this;
    }
}