

export class ShowGaussMySqlQuotasRequest {
    private 'X-Language'?: string;
    public offset?: string;
    public limit?: string;
    private 'enterprise_project_name'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: string): ShowGaussMySqlQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowGaussMySqlQuotasRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowGaussMySqlQuotasRequest {
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