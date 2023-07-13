

export class ShowQuotasRequest {
    private 'X-Language'?: ShowQuotasRequestXLanguageEnum | undefined;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowQuotasRequestXLanguageEnum): ShowQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowQuotasRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowQuotasRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
