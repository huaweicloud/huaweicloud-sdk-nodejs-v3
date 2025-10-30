

export class ShowExtendedWeakPasswordRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ShowExtendedWeakPasswordRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowExtendedWeakPasswordRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}