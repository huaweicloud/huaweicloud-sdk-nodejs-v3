

export class ListSecurityPolicyControlResourcesRequest {
    private 'X-Language'?: ListSecurityPolicyControlResourcesRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSecurityPolicyControlResourcesRequestXLanguageEnum | string): ListSecurityPolicyControlResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSecurityPolicyControlResourcesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSecurityPolicyControlResourcesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListSecurityPolicyControlResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSecurityPolicyControlResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecurityPolicyControlResourcesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
