

export class StatisticValue {
    public statistic?: string;
    public value?: number;
    public constructor() { 
    }
    public withStatistic(statistic: string): StatisticValue {
        this['statistic'] = statistic;
        return this;
    }
    public withValue(value: number): StatisticValue {
        this['value'] = value;
        return this;
    }
}