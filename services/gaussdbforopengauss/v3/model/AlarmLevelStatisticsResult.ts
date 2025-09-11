

export class AlarmLevelStatisticsResult {
    public count?: number;
    private 'level_name'?: string;
    public constructor() { 
    }
    public withCount(count: number): AlarmLevelStatisticsResult {
        this['count'] = count;
        return this;
    }
    public withLevelName(levelName: string): AlarmLevelStatisticsResult {
        this['level_name'] = levelName;
        return this;
    }
    public set levelName(levelName: string  | undefined) {
        this['level_name'] = levelName;
    }
    public get levelName(): string | undefined {
        return this['level_name'];
    }
}