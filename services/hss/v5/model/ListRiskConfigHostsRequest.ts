

export class ListRiskConfigHostsRequest {
    private 'enterprise_project_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(checkName?: string, standard?: string) { 
        this['check_name'] = checkName;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRiskConfigHostsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCheckName(checkName: string): ListRiskConfigHostsRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ListRiskConfigHostsRequest {
        this['standard'] = standard;
        return this;
    }
    public withHostName(hostName: string): ListRiskConfigHostsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ListRiskConfigHostsRequest {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withLimit(limit: number): ListRiskConfigHostsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRiskConfigHostsRequest {
        this['offset'] = offset;
        return this;
    }
}