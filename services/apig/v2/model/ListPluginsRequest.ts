

export class ListPluginsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'plugin_type'?: string;
    private 'plugin_scope'?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'precise_search'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListPluginsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListPluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginType(pluginType: string): ListPluginsRequest {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): string | undefined {
        return this['plugin_type'];
    }
    public withPluginScope(pluginScope: string): ListPluginsRequest {
        this['plugin_scope'] = pluginScope;
        return this;
    }
    public set pluginScope(pluginScope: string  | undefined) {
        this['plugin_scope'] = pluginScope;
    }
    public get pluginScope(): string | undefined {
        return this['plugin_scope'];
    }
    public withPluginId(pluginId: string): ListPluginsRequest {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): ListPluginsRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPreciseSearch(preciseSearch: string): ListPluginsRequest {
        this['precise_search'] = preciseSearch;
        return this;
    }
    public set preciseSearch(preciseSearch: string  | undefined) {
        this['precise_search'] = preciseSearch;
    }
    public get preciseSearch(): string | undefined {
        return this['precise_search'];
    }
}