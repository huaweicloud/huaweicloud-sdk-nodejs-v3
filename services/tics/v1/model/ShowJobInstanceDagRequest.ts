

export class ShowJobInstanceDagRequest {
    private 'instance_id'?: string;
    private 'league_id'?: string;
    private 'round_id'?: number;
    public constructor(instanceId?: string, leagueId?: string, roundId?: number) { 
        this['instance_id'] = instanceId;
        this['league_id'] = leagueId;
        this['round_id'] = roundId;
    }
    public withInstanceId(instanceId: string): ShowJobInstanceDagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLeagueId(leagueId: string): ShowJobInstanceDagRequest {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withRoundId(roundId: number): ShowJobInstanceDagRequest {
        this['round_id'] = roundId;
        return this;
    }
    public set roundId(roundId: number  | undefined) {
        this['round_id'] = roundId;
    }
    public get roundId(): number | undefined {
        return this['round_id'];
    }
}