

export class ShowPartnerStatisticsRequest {
    private 'league_id'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public constructor(leagueId?: string) { 
        this['league_id'] = leagueId;
    }
    public withLeagueId(leagueId: string): ShowPartnerStatisticsRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withStartDate(startDate: string): ShowPartnerStatisticsRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ShowPartnerStatisticsRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
}