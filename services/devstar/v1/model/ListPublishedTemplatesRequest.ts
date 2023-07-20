

export class ListPublishedTemplatesRequest {
    private 'X-Language'?: ListPublishedTemplatesRequestXLanguageEnum | string;
    public keyword?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListPublishedTemplatesRequestXLanguageEnum | string): ListPublishedTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListPublishedTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListPublishedTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withKeyword(keyword: string): ListPublishedTemplatesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withOffset(offset: number): ListPublishedTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPublishedTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPublishedTemplatesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
