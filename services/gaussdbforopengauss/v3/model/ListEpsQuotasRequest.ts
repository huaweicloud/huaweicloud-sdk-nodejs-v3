

export class ListEpsQuotasRequest {
    private 'X-Language'?: ListEpsQuotasRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListEpsQuotasRequestXLanguageEnum | string): ListEpsQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListEpsQuotasRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListEpsQuotasRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListEpsQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEpsQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListEpsQuotasRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ListEpsQuotasRequest {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEpsQuotasRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
