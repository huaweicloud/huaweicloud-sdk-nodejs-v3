

export class ShowBackupPolicyInfoRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ShowBackupPolicyInfoRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowBackupPolicyInfoRequest {
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