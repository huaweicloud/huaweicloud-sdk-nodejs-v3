

export class ListJdbcDriversRequest {
    public limit?: number;
    public offset?: number;
    private 'X-Language'?: ListJdbcDriversRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListJdbcDriversRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListJdbcDriversRequest {
        this['offset'] = offset;
        return this;
    }
    public withXLanguage(xLanguage: ListJdbcDriversRequestXLanguageEnum | string): ListJdbcDriversRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListJdbcDriversRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListJdbcDriversRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListJdbcDriversRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
