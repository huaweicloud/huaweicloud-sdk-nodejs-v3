

export class ListConfigurationsRequest {
    private 'X-Language'?: ListConfigurationsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListConfigurationsRequestXLanguageEnum | string): ListConfigurationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListConfigurationsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListConfigurationsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConfigurationsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
