import { UpdateDynamicServerlessPolicyRequestBody } from './UpdateDynamicServerlessPolicyRequestBody';


export class UpdateDynamicServerlessPolicyRequest {
    private 'X-Language'?: UpdateDynamicServerlessPolicyRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public body?: UpdateDynamicServerlessPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: UpdateDynamicServerlessPolicyRequestXLanguageEnum | string): UpdateDynamicServerlessPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateDynamicServerlessPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateDynamicServerlessPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateDynamicServerlessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateDynamicServerlessPolicyRequestBody): UpdateDynamicServerlessPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDynamicServerlessPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
