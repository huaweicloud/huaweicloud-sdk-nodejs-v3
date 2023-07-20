

export class ListEpsQuotasRequest {
    private 'enterprise_project_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
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
    public withOffset(offset: number): ListEpsQuotasRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEpsQuotasRequest {
        this['limit'] = limit;
        return this;
    }
}