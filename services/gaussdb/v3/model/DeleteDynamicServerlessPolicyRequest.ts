

export class DeleteDynamicServerlessPolicyRequest {
    private 'X-Language'?: DeleteDynamicServerlessPolicyRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: DeleteDynamicServerlessPolicyRequestXLanguageEnum | string): DeleteDynamicServerlessPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteDynamicServerlessPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteDynamicServerlessPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteDynamicServerlessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDynamicServerlessPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
