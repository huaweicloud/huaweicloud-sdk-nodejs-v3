

export class ValidateParaGroupNameRequest {
    private 'X-Language'?: ValidateParaGroupNameRequestXLanguageEnum | string;
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withXLanguage(xLanguage: ValidateParaGroupNameRequestXLanguageEnum | string): ValidateParaGroupNameRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ValidateParaGroupNameRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ValidateParaGroupNameRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withName(name: string): ValidateParaGroupNameRequest {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidateParaGroupNameRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
