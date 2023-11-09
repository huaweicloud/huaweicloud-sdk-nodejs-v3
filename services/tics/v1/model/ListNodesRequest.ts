

export class ListNodesRequest {
    private 'league_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(leagueId?: string, offset?: number, limit?: number) { 
        this['league_id'] = leagueId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withLeagueId(leagueId: string): ListNodesRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withOffset(offset: number): ListNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNodesRequest {
        this['limit'] = limit;
        return this;
    }
}