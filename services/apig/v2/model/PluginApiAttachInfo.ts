

export class PluginApiAttachInfo {
    private 'plugin_attach_id'?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_type'?: PluginApiAttachInfoPluginTypeEnum | string;
    private 'plugin_scope'?: PluginApiAttachInfoPluginScopeEnum | string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'attached_time'?: Date;
    public constructor() { 
    }
    public withPluginAttachId(pluginAttachId: string): PluginApiAttachInfo {
        this['plugin_attach_id'] = pluginAttachId;
        return this;
    }
    public set pluginAttachId(pluginAttachId: string  | undefined) {
        this['plugin_attach_id'] = pluginAttachId;
    }
    public get pluginAttachId(): string | undefined {
        return this['plugin_attach_id'];
    }
    public withPluginId(pluginId: string): PluginApiAttachInfo {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): PluginApiAttachInfo {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginType(pluginType: PluginApiAttachInfoPluginTypeEnum | string): PluginApiAttachInfo {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: PluginApiAttachInfoPluginTypeEnum | string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): PluginApiAttachInfoPluginTypeEnum | string | undefined {
        return this['plugin_type'];
    }
    public withPluginScope(pluginScope: PluginApiAttachInfoPluginScopeEnum | string): PluginApiAttachInfo {
        this['plugin_scope'] = pluginScope;
        return this;
    }
    public set pluginScope(pluginScope: PluginApiAttachInfoPluginScopeEnum | string  | undefined) {
        this['plugin_scope'] = pluginScope;
    }
    public get pluginScope(): PluginApiAttachInfoPluginScopeEnum | string | undefined {
        return this['plugin_scope'];
    }
    public withEnvId(envId: string): PluginApiAttachInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): PluginApiAttachInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withApiId(apiId: string): PluginApiAttachInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): PluginApiAttachInfo {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withAttachedTime(attachedTime: Date): PluginApiAttachInfo {
        this['attached_time'] = attachedTime;
        return this;
    }
    public set attachedTime(attachedTime: Date  | undefined) {
        this['attached_time'] = attachedTime;
    }
    public get attachedTime(): Date | undefined {
        return this['attached_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PluginApiAttachInfoPluginTypeEnum {
    CORS = 'cors',
    SET_RESP_HEADERS = 'set_resp_headers',
    KAFKA_LOG = 'kafka_log',
    BREAKER = 'breaker',
    RATE_LIMIT = 'rate_limit',
    THIRD_AUTH = 'third_auth',
    PROXY_CACHE = 'proxy_cache',
    PROXY_MIRROR = 'proxy_mirror'
}
/**
    * @export
    * @enum {string}
    */
export enum PluginApiAttachInfoPluginScopeEnum {
    GLOBAL = 'global'
}
