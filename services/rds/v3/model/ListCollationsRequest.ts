

export class ListCollationsRequest {
    private 'X-Language'?: ListCollationsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListCollationsRequestXLanguageEnum | string): ListCollationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListCollationsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListCollationsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollationsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
