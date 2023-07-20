

export class ShowIpInfoRequest {
    private 'enterprise_project_id'?: string;
    public ips?: string;
    public constructor(ips?: string) { 
        this['ips'] = ips;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowIpInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIps(ips: string): ShowIpInfoRequest {
        this['ips'] = ips;
        return this;
    }
}