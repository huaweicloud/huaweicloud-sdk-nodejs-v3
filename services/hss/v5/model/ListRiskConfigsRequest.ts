

export class ListRiskConfigsRequest {
    private 'enterprise_project_id'?: string;
    private 'check_name'?: string;
    private 'group_id'?: string;
    public severity?: string;
    public standard?: string;
    private 'host_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRiskConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCheckName(checkName: string): ListRiskConfigsRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withGroupId(groupId: string): ListRiskConfigsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withSeverity(severity: string): ListRiskConfigsRequest {
        this['severity'] = severity;
        return this;
    }
    public withStandard(standard: string): ListRiskConfigsRequest {
        this['standard'] = standard;
        return this;
    }
    public withHostId(hostId: string): ListRiskConfigsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLimit(limit: number): ListRiskConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRiskConfigsRequest {
        this['offset'] = offset;
        return this;
    }
}