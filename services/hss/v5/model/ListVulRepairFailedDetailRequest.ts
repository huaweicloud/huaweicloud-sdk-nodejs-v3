

export class ListVulRepairFailedDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'vul_id'?: string;
    public constructor(hostId?: string, vulId?: string) { 
        this['host_id'] = hostId;
        this['vul_id'] = vulId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulRepairFailedDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ListVulRepairFailedDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withVulId(vulId: string): ListVulRepairFailedDetailRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
}