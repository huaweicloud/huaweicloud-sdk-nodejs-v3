

export class ApiOperPluginInfo {
    private 'env_id'?: string;
    private 'plugin_ids'?: Array<string>;
    public constructor(envId?: string, pluginIds?: Array<string>) { 
        this['env_id'] = envId;
        this['plugin_ids'] = pluginIds;
    }
    public withEnvId(envId: string): ApiOperPluginInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withPluginIds(pluginIds: Array<string>): ApiOperPluginInfo {
        this['plugin_ids'] = pluginIds;
        return this;
    }
    public set pluginIds(pluginIds: Array<string>  | undefined) {
        this['plugin_ids'] = pluginIds;
    }
    public get pluginIds(): Array<string> | undefined {
        return this['plugin_ids'];
    }
}