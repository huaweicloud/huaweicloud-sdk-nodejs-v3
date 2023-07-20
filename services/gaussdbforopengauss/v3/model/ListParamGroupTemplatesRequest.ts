

export class ListParamGroupTemplatesRequest {
    private 'X-Language'?: ListParamGroupTemplatesRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListParamGroupTemplatesRequestXLanguageEnum | string): ListParamGroupTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListParamGroupTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListParamGroupTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListParamGroupTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListParamGroupTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListParamGroupTemplatesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
