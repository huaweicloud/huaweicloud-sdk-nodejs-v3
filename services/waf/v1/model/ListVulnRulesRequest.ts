

export class ListVulnRulesRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListVulnRulesRequestXLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public from?: number;
    public to?: number;
    public constructor() { 
    }
    public withContentType(contentType: string): ListVulnRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListVulnRulesRequestXLanguageEnum | string): ListVulnRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListVulnRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListVulnRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulnRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulnRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulnRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFrom(from: number): ListVulnRulesRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListVulnRulesRequest {
        this['to'] = to;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVulnRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
