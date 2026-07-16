

export class ShowPoolMonitorRequest {
    private 'pool_name'?: string;
    private 'time_range'?: string;
    public statistics?: string;
    public period?: string;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): ShowPoolMonitorRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withTimeRange(timeRange: string): ShowPoolMonitorRequest {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
    public withStatistics(statistics: string): ShowPoolMonitorRequest {
        this['statistics'] = statistics;
        return this;
    }
    public withPeriod(period: string): ShowPoolMonitorRequest {
        this['period'] = period;
        return this;
    }
}