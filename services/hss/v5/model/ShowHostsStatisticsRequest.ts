

export class ShowHostsStatisticsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ShowHostsStatisticsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowHostsStatisticsRequest {
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