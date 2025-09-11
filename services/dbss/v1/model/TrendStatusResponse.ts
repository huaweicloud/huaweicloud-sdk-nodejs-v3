

export class TrendStatusResponse {
    private 'db_id'?: string;
    private 'db_name'?: string;
    private 'generate_time'?: string;
    private 'statistics_type'?: string;
    public constructor() { 
    }
    public withDbId(dbId: string): TrendStatusResponse {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbName(dbName: string): TrendStatusResponse {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withGenerateTime(generateTime: string): TrendStatusResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withStatisticsType(statisticsType: string): TrendStatusResponse {
        this['statistics_type'] = statisticsType;
        return this;
    }
    public set statisticsType(statisticsType: string  | undefined) {
        this['statistics_type'] = statisticsType;
    }
    public get statisticsType(): string | undefined {
        return this['statistics_type'];
    }
}