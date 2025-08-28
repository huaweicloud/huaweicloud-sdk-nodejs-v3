

export class AttachedPluginInfo {
    private 'plugin_attach_id'?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_type'?: AttachedPluginInfoPluginTypeEnum | string;
    private 'plugin_scope'?: AttachedPluginInfoPluginScopeEnum | string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'attached_time'?: Date;
    private 'plugin_content'?: string;
    public remark?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withPluginAttachId(pluginAttachId: string): AttachedPluginInfo {
        this['plugin_attach_id'] = pluginAttachId;
        return this;
    }
    public set pluginAttachId(pluginAttachId: string  | undefined) {
        this['plugin_attach_id'] = pluginAttachId;
    }
    public get pluginAttachId(): string | undefined {
        return this['plugin_attach_id'];
    }
    public withPluginId(pluginId: string): AttachedPluginInfo {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): AttachedPluginInfo {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginType(pluginType: AttachedPluginInfoPluginTypeEnum | string): AttachedPluginInfo {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: AttachedPluginInfoPluginTypeEnum | string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): AttachedPluginInfoPluginTypeEnum | string | undefined {
        return this['plugin_type'];
    }
    public withPluginScope(pluginScope: AttachedPluginInfoPluginScopeEnum | string): AttachedPluginInfo {
        this['plugin_scope'] = pluginScope;
        return this;
    }
    public set pluginScope(pluginScope: AttachedPluginInfoPluginScopeEnum | string  | undefined) {
        this['plugin_scope'] = pluginScope;
    }
    public get pluginScope(): AttachedPluginInfoPluginScopeEnum | string | undefined {
        return this['plugin_scope'];
    }
    public withEnvId(envId: string): AttachedPluginInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): AttachedPluginInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withAttachedTime(attachedTime: Date): AttachedPluginInfo {
        this['attached_time'] = attachedTime;
        return this;
    }
    public set attachedTime(attachedTime: Date  | undefined) {
        this['attached_time'] = attachedTime;
    }
    public get attachedTime(): Date | undefined {
        return this['attached_time'];
    }
    public withPluginContent(pluginContent: string): AttachedPluginInfo {
        this['plugin_content'] = pluginContent;
        return this;
    }
    public set pluginContent(pluginContent: string  | undefined) {
        this['plugin_content'] = pluginContent;
    }
    public get pluginContent(): string | undefined {
        return this['plugin_content'];
    }
    public withRemark(remark: string): AttachedPluginInfo {
        this['remark'] = remark;
        return this;
    }
    public withCreateTime(createTime: Date): AttachedPluginInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): AttachedPluginInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AttachedPluginInfoPluginTypeEnum {
    CORS = 'cors',
    SET_RESP_HEADERS = 'set_resp_headers',
    KAFKA_LOG = 'kafka_log',
    BREAKER = 'breaker',
    RATE_LIMIT = 'rate_limit',
    THIRD_AUTH = 'third_auth',
    PROXY_CACHE = 'proxy_cache',
    PROXY_MIRROR = 'proxy_mirror',
    OIDC_AUTH = 'oidc_auth',
    JWT_AUTH = 'jwt_auth'
}
/**
    * @export
    * @enum {string}
    */
export enum AttachedPluginInfoPluginScopeEnum {
    GLOBAL = 'global'
}
