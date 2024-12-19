

export class ListDatastoresDetailsRequest {
    private 'X-Language'?: ListDatastoresDetailsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListDatastoresDetailsRequestXLanguageEnum | string): ListDatastoresDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDatastoresDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDatastoresDetailsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatastoresDetailsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
