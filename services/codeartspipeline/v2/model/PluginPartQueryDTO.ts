

export class PluginPartQueryDTO {
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    public version?: string;
    private 'plugin_attribution'?: string;
    private 'version_attribution'?: string;
    public constructor(pluginName?: string, displayName?: string, version?: string, pluginAttribution?: string) { 
        this['plugin_name'] = pluginName;
        this['display_name'] = displayName;
        this['version'] = version;
        this['plugin_attribution'] = pluginAttribution;
    }
    public withPluginName(pluginName: string): PluginPartQueryDTO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): PluginPartQueryDTO {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withVersion(version: string): PluginPartQueryDTO {
        this['version'] = version;
        return this;
    }
    public withPluginAttribution(pluginAttribution: string): PluginPartQueryDTO {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
    public withVersionAttribution(versionAttribution: string): PluginPartQueryDTO {
        this['version_attribution'] = versionAttribution;
        return this;
    }
    public set versionAttribution(versionAttribution: string  | undefined) {
        this['version_attribution'] = versionAttribution;
    }
    public get versionAttribution(): string | undefined {
        return this['version_attribution'];
    }
}