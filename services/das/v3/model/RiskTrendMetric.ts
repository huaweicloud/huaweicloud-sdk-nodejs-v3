

export class RiskTrendMetric {
    public series?: Array<number>;
    public timestamps?: Array<number>;
    public constructor() { 
    }
    public withSeries(series: Array<number>): RiskTrendMetric {
        this['series'] = series;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): RiskTrendMetric {
        this['timestamps'] = timestamps;
        return this;
    }
}