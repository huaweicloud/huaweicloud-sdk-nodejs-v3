

export class JobReportEnvVo {
    private 'agg_name'?: string;
    private 'league_id'?: string;
    private 'league_name'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withAggName(aggName: string): JobReportEnvVo {
        this['agg_name'] = aggName;
        return this;
    }
    public set aggName(aggName: string  | undefined) {
        this['agg_name'] = aggName;
    }
    public get aggName(): string | undefined {
        return this['agg_name'];
    }
    public withLeagueId(leagueId: string): JobReportEnvVo {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLeagueName(leagueName: string): JobReportEnvVo {
        this['league_name'] = leagueName;
        return this;
    }
    public set leagueName(leagueName: string  | undefined) {
        this['league_name'] = leagueName;
    }
    public get leagueName(): string | undefined {
        return this['league_name'];
    }
    public withProjectId(projectId: string): JobReportEnvVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): JobReportEnvVo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}