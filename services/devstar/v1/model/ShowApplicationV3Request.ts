

export class ShowApplicationV3Request {
    private 'X-Language'?: ShowApplicationV3RequestXLanguageEnum | undefined;
    private 'application_id': string | undefined;
    public constructor(applicationId?: any) { 
        this['application_id'] = applicationId;
    }
    public withXLanguage(xLanguage: ShowApplicationV3RequestXLanguageEnum): ShowApplicationV3Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowApplicationV3RequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withApplicationId(applicationId: string): ShowApplicationV3Request {
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
export enum ShowApplicationV3RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
