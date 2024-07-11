import { ListPluginExtensionsRequestBody } from './ListPluginExtensionsRequestBody';


export class ListPluginExtensionsRequest {
    private 'X-Language'?: ListPluginExtensionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ListPluginExtensionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
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
    public withBody(body: ListPluginExtensionsRequestBody): ListPluginExtensionsRequest {
        this['body'] = body;
        return this;
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
