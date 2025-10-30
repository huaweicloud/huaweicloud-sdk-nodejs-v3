

export class ListVulHostBackupsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'vul_id'?: string;
    private 'host_id'?: string;
    public constructor(vulId?: string, hostId?: string) { 
        this['vul_id'] = vulId;
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHostBackupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListVulHostBackupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListVulHostBackupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVulId(vulId: string): ListVulHostBackupsRequest {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withHostId(hostId: string): ListVulHostBackupsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}