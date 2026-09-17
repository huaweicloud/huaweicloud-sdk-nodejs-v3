

export class ListServiceSpecificCredentialSupportedServicesV5Request {
    private 'X-Language'?: ListServiceSpecificCredentialSupportedServicesV5RequestXLanguageEnum | string;
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListServiceSpecificCredentialSupportedServicesV5RequestXLanguageEnum | string): ListServiceSpecificCredentialSupportedServicesV5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListServiceSpecificCredentialSupportedServicesV5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListServiceSpecificCredentialSupportedServicesV5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withMarker(marker: string): ListServiceSpecificCredentialSupportedServicesV5Request {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListServiceSpecificCredentialSupportedServicesV5Request {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServiceSpecificCredentialSupportedServicesV5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
