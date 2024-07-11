import { ResumePluginExtensionsRequestBody } from './ResumePluginExtensionsRequestBody';


export class ResumePluginExtensionsRequest {
    private 'X-Language'?: ResumePluginExtensionsRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: ResumePluginExtensionsRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ResumePluginExtensionsRequestXLanguageEnum | string): ResumePluginExtensionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ResumePluginExtensionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ResumePluginExtensionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ResumePluginExtensionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResumePluginExtensionsRequestBody): ResumePluginExtensionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResumePluginExtensionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
