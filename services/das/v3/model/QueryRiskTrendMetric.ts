

export class QueryRiskTrendMetric {
    public series?: Array<number>;
    public timestamps?: Array<number>;
    public constructor() { 
    }
    public withSeries(series: Array<number>): QueryRiskTrendMetric {
        this['series'] = series;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): QueryRiskTrendMetric {
        this['timestamps'] = timestamps;
        return this;
    }
}