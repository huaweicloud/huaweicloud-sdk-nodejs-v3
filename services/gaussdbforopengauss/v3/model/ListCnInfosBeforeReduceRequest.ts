

export class ListCnInfosBeforeReduceRequest {
    private 'X-Language'?: ListCnInfosBeforeReduceRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListCnInfosBeforeReduceRequestXLanguageEnum | string): ListCnInfosBeforeReduceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCnInfosBeforeReduceRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCnInfosBeforeReduceRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListCnInfosBeforeReduceRequest {
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
export enum ListCnInfosBeforeReduceRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
