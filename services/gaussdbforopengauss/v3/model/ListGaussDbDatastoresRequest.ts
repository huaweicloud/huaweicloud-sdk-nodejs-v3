

export class ListGaussDbDatastoresRequest {
    private 'X-Language'?: ListGaussDbDatastoresRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListGaussDbDatastoresRequestXLanguageEnum | string): ListGaussDbDatastoresRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListGaussDbDatastoresRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListGaussDbDatastoresRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGaussDbDatastoresRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
