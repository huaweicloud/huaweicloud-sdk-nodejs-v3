

export class SingleAgentParam {
    private 'agent_id'?: string;
    private 'inner_ip'?: string;
    public constructor(agentId?: string, innerIp?: string) { 
        this['agent_id'] = agentId;
        this['inner_ip'] = innerIp;
    }
    public withAgentId(agentId: string): SingleAgentParam {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withInnerIp(innerIp: string): SingleAgentParam {
        this['inner_ip'] = innerIp;
        return this;
    }
    public set innerIp(innerIp: string  | undefined) {
        this['inner_ip'] = innerIp;
    }
    public get innerIp(): string | undefined {
        return this['inner_ip'];
    }
}