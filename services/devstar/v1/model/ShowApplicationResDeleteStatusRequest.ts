

export class ShowApplicationResDeleteStatusRequest {
    private 'X-Language'?: ShowApplicationResDeleteStatusRequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationResDeleteStatusRequestXLanguageEnum): ShowApplicationResDeleteStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationResDeleteStatusRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationResDeleteStatusRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplicationResDeleteStatusRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
