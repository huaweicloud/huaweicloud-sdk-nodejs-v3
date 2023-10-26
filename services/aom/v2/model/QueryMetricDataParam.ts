import { MetricQueryMeritcParam } from './MetricQueryMeritcParam';


export class QueryMetricDataParam {
    public metrics?: Array<MetricQueryMeritcParam>;
    public period?: number;
    public statistics?: Array<string>;
    public timerange?: string;
    public constructor(metrics?: Array<MetricQueryMeritcParam>, period?: number, statistics?: Array<string>, timerange?: string) { 
        this['metrics'] = metrics;
        this['period'] = period;
        this['statistics'] = statistics;
        this['timerange'] = timerange;
    }
    public withMetrics(metrics: Array<MetricQueryMeritcParam>): QueryMetricDataParam {
        this['metrics'] = metrics;
        return this;
    }
    public withPeriod(period: number): QueryMetricDataParam {
        this['period'] = period;
        return this;
    }
    public withStatistics(statistics: Array<string>): QueryMetricDataParam {
        this['statistics'] = statistics;
        return this;
    }
    public withTimerange(timerange: string): QueryMetricDataParam {
        this['timerange'] = timerange;
        return this;
    }
}