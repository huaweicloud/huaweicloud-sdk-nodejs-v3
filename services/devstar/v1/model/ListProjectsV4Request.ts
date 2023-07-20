

export class ListProjectsV4Request {
    private 'X-Language'?: ListProjectsV4RequestXLanguageEnum | string;
    public keyword?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListProjectsV4RequestXLanguageEnum | string): ListProjectsV4Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListProjectsV4RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListProjectsV4RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withKeyword(keyword: string): ListProjectsV4Request {
        this['keyword'] = keyword;
        return this;
    }
    public withLimit(limit: number): ListProjectsV4Request {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProjectsV4Request {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectsV4RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
