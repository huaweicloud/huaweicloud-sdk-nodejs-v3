import { UninstallPluginRequestBody } from './UninstallPluginRequestBody';


export class UninstallPluginRequest {
    private 'X-Language'?: UninstallPluginRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UninstallPluginRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UninstallPluginRequestXLanguageEnum | string): UninstallPluginRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UninstallPluginRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UninstallPluginRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UninstallPluginRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UninstallPluginRequestBody): UninstallPluginRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UninstallPluginRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
