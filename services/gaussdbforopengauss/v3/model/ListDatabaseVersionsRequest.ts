

export class ListDatabaseVersionsRequest {
    private 'X-Language'?: ListDatabaseVersionsRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListDatabaseVersionsRequestXLanguageEnum | string): ListDatabaseVersionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDatabaseVersionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDatabaseVersionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListDatabaseVersionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseVersionsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseVersionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
