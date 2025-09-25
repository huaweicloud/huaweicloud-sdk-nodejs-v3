

export class ShowRedistributionParametersRequest {
    private 'X-Language'?: ShowRedistributionParametersRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowRedistributionParametersRequestXLanguageEnum | string): ShowRedistributionParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowRedistributionParametersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowRedistributionParametersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRedistributionParametersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
