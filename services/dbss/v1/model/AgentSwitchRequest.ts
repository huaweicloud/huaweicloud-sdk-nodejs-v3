

export class AgentSwitchRequest {
    private 'agent_id'?: string;
    public status?: number;
    public constructor(agentId?: string, status?: number) { 
        this['agent_id'] = agentId;
        this['status'] = status;
    }
    public withAgentId(agentId: string): AgentSwitchRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withStatus(status: number): AgentSwitchRequest {
        this['status'] = status;
        return this;
    }
}