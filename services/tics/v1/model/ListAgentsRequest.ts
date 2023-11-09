

export class ListAgentsRequest {
    public limit?: number;
    public offset?: number;
    private 'agent_name'?: string;
    private 'league_name'?: string;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withLimit(limit: number): ListAgentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAgentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withAgentName(agentName: string): ListAgentsRequest {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withLeagueName(leagueName: string): ListAgentsRequest {
        this['league_name'] = leagueName;
        return this;
    }
    public set leagueName(leagueName: string  | undefined) {
        this['league_name'] = leagueName;
    }
    public get leagueName(): string | undefined {
        return this['league_name'];
    }
}