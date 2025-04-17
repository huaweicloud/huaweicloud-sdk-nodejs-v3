

export class ShowLogConfigRequest {
    private 'enterprise_project_id'?: string;
    public constructor(enterpriseProjectId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowLogConfigRequest {
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