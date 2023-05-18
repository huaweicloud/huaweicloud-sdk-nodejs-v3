

export class ShowAgentRequest {
    private 'agent_id': string | undefined;
    public constructor(agentId?: any) { 
        this['agent_id'] = agentId;
    }
    public withAgentId(agentId: string): ShowAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId() {
        return this['agent_id'];
    }
}