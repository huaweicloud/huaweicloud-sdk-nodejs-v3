

export class ShowAgentDetailRequest {
    private 'agent_id'?: string;
    public constructor(agentId?: string) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): ShowAgentDetailRequest {
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