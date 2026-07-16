

export class PoolMonitorStatistics {
    public statistic?: string;
    public value?: number;
    public constructor() { 
    }
    public withStatistic(statistic: string): PoolMonitorStatistics {
        this['statistic'] = statistic;
        return this;
    }
    public withValue(value: number): PoolMonitorStatistics {
        this['value'] = value;
        return this;
    }
}