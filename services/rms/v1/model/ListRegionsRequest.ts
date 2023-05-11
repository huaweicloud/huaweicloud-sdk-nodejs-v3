

export class ListRegionsRequest {
    private 'X-Language'?: ListRegionsRequestXLanguageEnum | undefined;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListRegionsRequestXLanguageEnum): ListRegionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRegionsRequestXLanguageEnum | undefined) {
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
export enum ListRegionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
