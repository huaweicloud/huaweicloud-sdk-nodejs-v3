

export class ShowPluginRequest {
    private 'instance_id'?: string;
    private 'plugin_id'?: string;
    public constructor(instanceId?: string, pluginId?: string) { 
        this['instance_id'] = instanceId;
        this['plugin_id'] = pluginId;
    }
    public withInstanceId(instanceId: string): ShowPluginRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPluginId(pluginId: string): ShowPluginRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
}