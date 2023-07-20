

export class ListRegionsRequest {
    private 'X-Language'?: ListRegionsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListRegionsRequestXLanguageEnum | string): ListRegionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRegionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRegionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRegionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
