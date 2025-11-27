

export class ShowErrorLogSwitchStatusRequest {
    private 'X-Language'?: ShowErrorLogSwitchStatusRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ShowErrorLogSwitchStatusRequestXLanguageEnum | string): ShowErrorLogSwitchStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowErrorLogSwitchStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowErrorLogSwitchStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowErrorLogSwitchStatusRequest {
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
export enum ShowErrorLogSwitchStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
