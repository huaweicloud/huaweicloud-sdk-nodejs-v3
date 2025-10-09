

export class ListPluginInfoListRequest {
    private 'instance_id'?: string;
    private 'plugin_name'?: string;
    private 'X-Language'?: ListPluginInfoListRequestXLanguageEnum | string;
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
    public withPluginName(pluginName: string): ListPluginInfoListRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListPluginInfoListRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
