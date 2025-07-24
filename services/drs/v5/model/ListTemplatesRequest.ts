

export class ListTemplatesRequest {
    private 'X-Language'?: ListTemplatesRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListTemplatesRequestXLanguageEnum | string): ListTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTemplatesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
