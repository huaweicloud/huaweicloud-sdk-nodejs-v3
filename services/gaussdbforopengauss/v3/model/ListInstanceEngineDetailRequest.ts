

export class ListInstanceEngineDetailRequest {
    private 'X-Language'?: ListInstanceEngineDetailRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListInstanceEngineDetailRequestXLanguageEnum | string): ListInstanceEngineDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceEngineDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceEngineDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListInstanceEngineDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceEngineDetailRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceEngineDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
