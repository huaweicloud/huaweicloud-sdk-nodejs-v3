

export class ListReplaySupportSourceConfigRequest {
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: ListReplaySupportSourceConfigRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListReplaySupportSourceConfigRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListReplaySupportSourceConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: ListReplaySupportSourceConfigRequestXLanguageEnum | string): ListReplaySupportSourceConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListReplaySupportSourceConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListReplaySupportSourceConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListReplaySupportSourceConfigRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
