
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPluginResponse extends SdkResponse {
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_type'?: ShowPluginResponsePluginTypeEnum | string;
    private 'plugin_scope'?: ShowPluginResponsePluginScopeEnum | string;
    private 'plugin_content'?: string;
    public remark?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withPluginId(pluginId: string): ShowPluginResponse {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): ShowPluginResponse {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginType(pluginType: ShowPluginResponsePluginTypeEnum | string): ShowPluginResponse {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: ShowPluginResponsePluginTypeEnum | string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): ShowPluginResponsePluginTypeEnum | string | undefined {
        return this['plugin_type'];
    }
    public withPluginScope(pluginScope: ShowPluginResponsePluginScopeEnum | string): ShowPluginResponse {
        this['plugin_scope'] = pluginScope;
        return this;
    }
    public set pluginScope(pluginScope: ShowPluginResponsePluginScopeEnum | string  | undefined) {
        this['plugin_scope'] = pluginScope;
    }
    public get pluginScope(): ShowPluginResponsePluginScopeEnum | string | undefined {
        return this['plugin_scope'];
    }
    public withPluginContent(pluginContent: string): ShowPluginResponse {
        this['plugin_content'] = pluginContent;
        return this;
    }
    public set pluginContent(pluginContent: string  | undefined) {
        this['plugin_content'] = pluginContent;
    }
    public get pluginContent(): string | undefined {
        return this['plugin_content'];
    }
    public withRemark(remark: string): ShowPluginResponse {
        this['remark'] = remark;
        return this;
    }
    public withCreateTime(createTime: Date): ShowPluginResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowPluginResponse {
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
export enum ShowPluginResponsePluginTypeEnum {
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
export enum ShowPluginResponsePluginScopeEnum {
    GLOBAL = 'global'
}
