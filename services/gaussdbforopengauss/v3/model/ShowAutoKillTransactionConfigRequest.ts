

export class ShowAutoKillTransactionConfigRequest {
    private 'X-Language'?: ShowAutoKillTransactionConfigRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public type?: string;
    public constructor(instanceId?: string, type?: string) { 
        this['instance_id'] = instanceId;
        this['type'] = type;
    }
    public withXLanguage(xLanguage: ShowAutoKillTransactionConfigRequestXLanguageEnum | string): ShowAutoKillTransactionConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowAutoKillTransactionConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowAutoKillTransactionConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowAutoKillTransactionConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): ShowAutoKillTransactionConfigRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAutoKillTransactionConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
