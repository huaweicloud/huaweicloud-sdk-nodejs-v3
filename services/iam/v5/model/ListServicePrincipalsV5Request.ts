

export class ListServicePrincipalsV5Request {
    public limit?: number;
    public marker?: string;
    private 'X-Language'?: ListServicePrincipalsV5RequestXLanguageEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListServicePrincipalsV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListServicePrincipalsV5Request {
        this['marker'] = marker;
        return this;
    }
    public withXLanguage(xLanguage: ListServicePrincipalsV5RequestXLanguageEnum | string): ListServicePrincipalsV5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListServicePrincipalsV5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListServicePrincipalsV5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListServicePrincipalsV5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
