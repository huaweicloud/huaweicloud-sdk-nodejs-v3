

export class ShowRiskConfigDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'host_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(checkName?: string, standard?: string) { 
        this['check_name'] = checkName;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowRiskConfigDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCheckName(checkName: string): ShowRiskConfigDetailRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ShowRiskConfigDetailRequest {
        this['standard'] = standard;
        return this;
    }
    public withHostId(hostId: string): ShowRiskConfigDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLimit(limit: number): ShowRiskConfigDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowRiskConfigDetailRequest {
        this['offset'] = offset;
        return this;
    }
}