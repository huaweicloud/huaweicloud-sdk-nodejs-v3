

export class ListApiAttachablePluginsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_id'?: string;
    private 'env_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_type'?: string;
    private 'plugin_id'?: string;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): ListApiAttachablePluginsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListApiAttachablePluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApiAttachablePluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withApiId(apiId: string): ListApiAttachablePluginsRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withEnvId(envId: string): ListApiAttachablePluginsRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withPluginName(pluginName: string): ListApiAttachablePluginsRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginType(pluginType: string): ListApiAttachablePluginsRequest {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): string | undefined {
        return this['plugin_type'];
    }
    public withPluginId(pluginId: string): ListApiAttachablePluginsRequest {
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