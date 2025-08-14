

export class ListAllProvidersRequest {
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: ListAllProvidersRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListAllProvidersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAllProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ListAllProvidersRequestXLanguageEnum | string): ListAllProvidersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAllProvidersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAllProvidersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllProvidersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
