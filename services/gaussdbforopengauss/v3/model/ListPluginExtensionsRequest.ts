

export class ListPluginExtensionsRequest {
    private 'X-Language'?: ListPluginExtensionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    private 'plugin_name'?: string;
    public constructor(instanceId?: string, dbName?: string, pluginName?: string) { 
        this['instance_id'] = instanceId;
        this['db_name'] = dbName;
        this['plugin_name'] = pluginName;
    }
    public withXLanguage(xLanguage: ListPluginExtensionsRequestXLanguageEnum | string): ListPluginExtensionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListPluginExtensionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListPluginExtensionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListPluginExtensionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): ListPluginExtensionsRequest {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withPluginName(pluginName: string): ListPluginExtensionsRequest {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPluginExtensionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
