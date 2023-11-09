

export class ListAuditInfoRequest {
    private 'league_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(leagueId?: string, limit?: number, offset?: number) { 
        this['league_id'] = leagueId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withLeagueId(leagueId: string): ListAuditInfoRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLimit(limit: number): ListAuditInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAuditInfoRequest {
        this['offset'] = offset;
        return this;
    }
}