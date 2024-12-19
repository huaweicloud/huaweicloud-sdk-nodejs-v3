

export class ShowUpgradeCandidateVersionsDetailsRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: ShowUpgradeCandidateVersionsDetailsRequestXLanguageEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowUpgradeCandidateVersionsDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: ShowUpgradeCandidateVersionsDetailsRequestXLanguageEnum | string): ShowUpgradeCandidateVersionsDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowUpgradeCandidateVersionsDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowUpgradeCandidateVersionsDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUpgradeCandidateVersionsDetailsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
