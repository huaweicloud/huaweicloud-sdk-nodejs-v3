

export class ListPublishedTemplatesRequest {
    public xLanguage?: ListPublishedTemplatesRequestXLanguageEnum;
    public keyword?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage?: ListPublishedTemplatesRequestXLanguageEnum): ListPublishedTemplatesRequest {
        this.xLanguage = xLanguage;
        return this;
    }
    public withKeyword(keyword?: string): ListPublishedTemplatesRequest {
        this.keyword = keyword;
        return this;
    }
    public withOffset(offset?: number): ListPublishedTemplatesRequest {
        this.offset = offset;
        return this;
    }
    public withLimit(limit?: number): ListPublishedTemplatesRequest {
        this.limit = limit;
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
