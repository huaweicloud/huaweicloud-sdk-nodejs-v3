

export class ShowEnterpriseProjectRequest {
    private 'X-Language'?: ShowEnterpriseProjectRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowEnterpriseProjectRequestXLanguageEnum | string): ShowEnterpriseProjectRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowEnterpriseProjectRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowEnterpriseProjectRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowEnterpriseProjectRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowEnterpriseProjectRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ShowEnterpriseProjectRequest {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): ShowEnterpriseProjectRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEnterpriseProjectRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
