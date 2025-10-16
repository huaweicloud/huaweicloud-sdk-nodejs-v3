

export class ListPluginInfoListRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ListPluginInfoListRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    private 'plugin_name'?: ListPluginInfoListRequestPluginNameEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListPluginInfoListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ListPluginInfoListRequestXLanguageEnum | string): ListPluginInfoListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListPluginInfoListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListPluginInfoListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListPluginInfoListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginInfoListRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginName(pluginName: ListPluginInfoListRequestPluginNameEnum | string): ListPluginInfoListRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: ListPluginInfoListRequestPluginNameEnum | string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): ListPluginInfoListRequestPluginNameEnum | string | undefined {
        return this['plugin_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPluginInfoListRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPluginInfoListRequestPluginNameEnum {
    POSTGIS = 'postgis'
}
