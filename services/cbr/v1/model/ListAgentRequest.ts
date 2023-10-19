

export class ListAgentRequest {
    public limit?: string;
    public offset?: number;
    public status?: string;
    private 'agent_id'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: string): ListAgentRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAgentRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListAgentRequest {
        this['status'] = status;
        return this;
    }
    public withAgentId(agentId: Array<string>): ListAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: Array<string>  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): Array<string> | undefined {
        return this['agent_id'];
    }
}