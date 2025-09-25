

export class ShowWelfareAreaInfoRequest {
    private 'x-language'?: ShowWelfareAreaInfoRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowWelfareAreaInfoRequestXLanguageEnum | string): ShowWelfareAreaInfoRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowWelfareAreaInfoRequestXLanguageEnum | string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): ShowWelfareAreaInfoRequestXLanguageEnum | string | undefined {
        return this['x-language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWelfareAreaInfoRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
