

export class ListEnterpriseProjectsRequest {
    private 'X-Language'?: ListEnterpriseProjectsRequestXLanguageEnum | string;
    private 'name_keyword'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListEnterpriseProjectsRequestXLanguageEnum | string): ListEnterpriseProjectsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEnterpriseProjectsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEnterpriseProjectsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withNameKeyword(nameKeyword: string): ListEnterpriseProjectsRequest {
        this['name_keyword'] = nameKeyword;
        return this;
    }
    public set nameKeyword(nameKeyword: string  | undefined) {
        this['name_keyword'] = nameKeyword;
    }
    public get nameKeyword(): string | undefined {
        return this['name_keyword'];
    }
    public withOffset(offset: number): ListEnterpriseProjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnterpriseProjectsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEnterpriseProjectsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
