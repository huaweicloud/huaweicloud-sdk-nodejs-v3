

export class FullStagePluginsRelationVOAllSteps {
    private 'plugin_name'?: string;
    private 'display_name'?: string;
    public version?: string;
    public constructor() { 
    }
    public withPluginName(pluginName: string): FullStagePluginsRelationVOAllSteps {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withDisplayName(displayName: string): FullStagePluginsRelationVOAllSteps {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withVersion(version: string): FullStagePluginsRelationVOAllSteps {
        this['version'] = version;
        return this;
    }
}