

export class AgentRisk {
    private 'agent_id'?: string;
    public username?: string;
    private 'create_time'?: Date;
    public type?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): AgentRisk {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withUsername(username: string): AgentRisk {
        this['username'] = username;
        return this;
    }
    public withCreateTime(createTime: Date): AgentRisk {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withType(type: string): AgentRisk {
        this['type'] = type;
        return this;
    }
}