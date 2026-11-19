

export class ShowTemplateRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    public region?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTemplateRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ShowTemplateRequest {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): ShowTemplateRequest {
        this['region'] = region;
        return this;
    }
}