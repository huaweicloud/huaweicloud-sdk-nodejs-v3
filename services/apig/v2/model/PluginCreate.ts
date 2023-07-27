

export class PluginCreate {
    private 'plugin_name'?: string;
    private 'plugin_type'?: PluginCreatePluginTypeEnum | string;
    private 'plugin_scope'?: PluginCreatePluginScopeEnum | string;
    private 'plugin_content'?: string;
    public remark?: string;
    public constructor(pluginName?: string, pluginType?: string, pluginScope?: string, pluginContent?: string) { 
        this['plugin_name'] = pluginName;
        this['plugin_type'] = pluginType;
        this['plugin_scope'] = pluginScope;
        this['plugin_content'] = pluginContent;
    }
    public withPluginName(pluginName: string): PluginCreate {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginType(pluginType: PluginCreatePluginTypeEnum | string): PluginCreate {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: PluginCreatePluginTypeEnum | string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): PluginCreatePluginTypeEnum | string | undefined {
        return this['plugin_type'];
    }
    public withPluginScope(pluginScope: PluginCreatePluginScopeEnum | string): PluginCreate {
        this['plugin_scope'] = pluginScope;
        return this;
    }
    public set pluginScope(pluginScope: PluginCreatePluginScopeEnum | string  | undefined) {
        this['plugin_scope'] = pluginScope;
    }
    public get pluginScope(): PluginCreatePluginScopeEnum | string | undefined {
        return this['plugin_scope'];
    }
    public withPluginContent(pluginContent: string): PluginCreate {
        this['plugin_content'] = pluginContent;
        return this;
    }
    public set pluginContent(pluginContent: string  | undefined) {
        this['plugin_content'] = pluginContent;
    }
    public get pluginContent(): string | undefined {
        return this['plugin_content'];
    }
    public withRemark(remark: string): PluginCreate {
        this['remark'] = remark;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PluginCreatePluginTypeEnum {
    CORS = 'cors',
    SET_RESP_HEADERS = 'set_resp_headers',
    KAFKA_LOG = 'kafka_log',
    BREAKER = 'breaker',
    RATE_LIMIT = 'rate_limit',
    THIRD_AUTH = 'third_auth'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginCreatePluginScopeEnum {
    GLOBAL = 'global'
}
