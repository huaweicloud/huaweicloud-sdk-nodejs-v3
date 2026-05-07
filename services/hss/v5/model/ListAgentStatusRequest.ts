

export class ListAgentStatusRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'agent_id'?: string;
    private 'agent_status'?: string;
    private 'abnormal_reason'?: string;
    public constructor(agentId?: string) { 
        this['agent_id'] = agentId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAgentStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListAgentStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAgentStatusRequest {
        this['offset'] = offset;
        return this;
    }
    public withAgentId(agentId: string): ListAgentStatusRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentStatus(agentStatus: string): ListAgentStatusRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withAbnormalReason(abnormalReason: string): ListAgentStatusRequest {
        this['abnormal_reason'] = abnormalReason;
        return this;
    }
    public set abnormalReason(abnormalReason: string  | undefined) {
        this['abnormal_reason'] = abnormalReason;
    }
    public get abnormalReason(): string | undefined {
        return this['abnormal_reason'];
    }
}