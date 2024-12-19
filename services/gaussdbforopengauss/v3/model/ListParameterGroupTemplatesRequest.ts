

export class ListParameterGroupTemplatesRequest {
    private 'X-Language'?: ListParameterGroupTemplatesRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListParameterGroupTemplatesRequestXLanguageEnum | string): ListParameterGroupTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListParameterGroupTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListParameterGroupTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListParameterGroupTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListParameterGroupTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListParameterGroupTemplatesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
