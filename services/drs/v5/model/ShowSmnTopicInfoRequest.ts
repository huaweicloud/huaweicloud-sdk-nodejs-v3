

export class ShowSmnTopicInfoRequest {
    private 'X-Language'?: ShowSmnTopicInfoRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowSmnTopicInfoRequestXLanguageEnum | string): ShowSmnTopicInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSmnTopicInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowSmnTopicInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSmnTopicInfoRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
