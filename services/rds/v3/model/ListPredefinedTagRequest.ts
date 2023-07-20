

export class ListPredefinedTagRequest {
    private 'X-Language'?: ListPredefinedTagRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListPredefinedTagRequestXLanguageEnum | string): ListPredefinedTagRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListPredefinedTagRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListPredefinedTagRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPredefinedTagRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
