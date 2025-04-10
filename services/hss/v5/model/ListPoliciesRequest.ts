

export class ListPoliciesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'agent_id'?: string;
    public constructor(offset?: number, limit?: number, agentId?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['agent_id'] = agentId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPoliciesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withAgentId(agentId: string): ListPoliciesRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}