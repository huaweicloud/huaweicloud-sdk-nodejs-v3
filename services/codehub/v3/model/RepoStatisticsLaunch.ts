

export class RepoStatisticsLaunch {
    private 'can_statistics'?: boolean;
    private 'join_id'?: string;
    public message?: string;
    public constructor() { 
    }
    public withCanStatistics(canStatistics: boolean): RepoStatisticsLaunch {
        this['can_statistics'] = canStatistics;
        return this;
    }
    public set canStatistics(canStatistics: boolean  | undefined) {
        this['can_statistics'] = canStatistics;
    }
    public get canStatistics(): boolean | undefined {
        return this['can_statistics'];
    }
    public withJoinId(joinId: string): RepoStatisticsLaunch {
        this['join_id'] = joinId;
        return this;
    }
    public set joinId(joinId: string  | undefined) {
        this['join_id'] = joinId;
    }
    public get joinId(): string | undefined {
        return this['join_id'];
    }
    public withMessage(message: string): RepoStatisticsLaunch {
        this['message'] = message;
        return this;
    }
}