

export class ShowExpansionParametersRequest {
    private 'X-Language'?: ShowExpansionParametersRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowExpansionParametersRequestXLanguageEnum | string): ShowExpansionParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowExpansionParametersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowExpansionParametersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowExpansionParametersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
