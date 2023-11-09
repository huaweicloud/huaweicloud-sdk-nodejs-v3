

export class ShowLeagueRequest {
    private 'league_id'?: string;
    public constructor(leagueId?: string) { 
        this['league_id'] = leagueId;
    }
    public withLeagueId(leagueId: string): ShowLeagueRequest {
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