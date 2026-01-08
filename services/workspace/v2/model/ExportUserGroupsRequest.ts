

export class ExportUserGroupsRequest {
    public limit?: number;
    public offset?: number;
    public keyword?: string;
    public language?: ExportUserGroupsRequestLanguageEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ExportUserGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ExportUserGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withKeyword(keyword: string): ExportUserGroupsRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withLanguage(language: ExportUserGroupsRequestLanguageEnum | string): ExportUserGroupsRequest {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportUserGroupsRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
