

export class ShowInstanceReportRequest {
    private 'instance_id'?: string;
    private 'league_id'?: string;
    public constructor(instanceId?: string, leagueId?: string) { 
        this['instance_id'] = instanceId;
        this['league_id'] = leagueId;
    }
    public withInstanceId(instanceId: string): ShowInstanceReportRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLeagueId(leagueId: string): ShowInstanceReportRequest {
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