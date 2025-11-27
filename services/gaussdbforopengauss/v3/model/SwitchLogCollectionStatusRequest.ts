

export class SwitchLogCollectionStatusRequest {
    private 'X-Language'?: SwitchLogCollectionStatusRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public status?: string;
    public constructor(instanceId?: string, status?: string) { 
        this['instance_id'] = instanceId;
        this['status'] = status;
    }
    public withXLanguage(xLanguage: SwitchLogCollectionStatusRequestXLanguageEnum | string): SwitchLogCollectionStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchLogCollectionStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchLogCollectionStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SwitchLogCollectionStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): SwitchLogCollectionStatusRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchLogCollectionStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
