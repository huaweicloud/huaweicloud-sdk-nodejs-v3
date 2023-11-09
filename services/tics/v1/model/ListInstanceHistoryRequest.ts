

export class ListInstanceHistoryRequest {
    private 'league_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'job_id'?: string;
    public constructor(leagueId?: string, limit?: number, offset?: number) { 
        this['league_id'] = leagueId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withLeagueId(leagueId: string): ListInstanceHistoryRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLimit(limit: number): ListInstanceHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withJobId(jobId: string): ListInstanceHistoryRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}