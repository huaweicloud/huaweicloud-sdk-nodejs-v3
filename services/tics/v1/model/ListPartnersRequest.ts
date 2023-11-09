

export class ListPartnersRequest {
    public limit?: number;
    public offset?: number;
    private 'league_id'?: string;
    public constructor(limit?: number, offset?: number, leagueId?: string) { 
        this['limit'] = limit;
        this['offset'] = offset;
        this['league_id'] = leagueId;
    }
    public withLimit(limit: number): ListPartnersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPartnersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLeagueId(leagueId: string): ListPartnersRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
}