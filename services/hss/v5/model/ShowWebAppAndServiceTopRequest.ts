

export class ShowWebAppAndServiceTopRequest {
    private 'enterprise_project_id'?: string;
    public catalogue?: string;
    public constructor(catalogue?: string) { 
        this['catalogue'] = catalogue;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowWebAppAndServiceTopRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCatalogue(catalogue: string): ShowWebAppAndServiceTopRequest {
        this['catalogue'] = catalogue;
        return this;
    }
}