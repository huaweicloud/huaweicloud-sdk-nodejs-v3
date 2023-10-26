import { StatisticValue } from './StatisticValue';


export class MetricDataPoints {
    public statistics?: Array<StatisticValue>;
    public timestamp?: number;
    public unit?: string;
    public constructor() { 
    }
    public withStatistics(statistics: Array<StatisticValue>): MetricDataPoints {
        this['statistics'] = statistics;
        return this;
    }
    public withTimestamp(timestamp: number): MetricDataPoints {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUnit(unit: string): MetricDataPoints {
        this['unit'] = unit;
        return this;
    }
}