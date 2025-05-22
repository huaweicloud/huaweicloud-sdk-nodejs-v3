import { MetricRequest2Dividend } from './MetricRequest2Dividend';


export class MetricRequest2 {
    private 'metric_type'?: string;
    private 'sprint_id'?: string;
    public dividend?: MetricRequest2Dividend;
    public divisor?: object;
    public constructor() { 
    }
    public withMetricType(metricType: string): MetricRequest2 {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withSprintId(sprintId: string): MetricRequest2 {
        this['sprint_id'] = sprintId;
        return this;
    }
    public set sprintId(sprintId: string  | undefined) {
        this['sprint_id'] = sprintId;
    }
    public get sprintId(): string | undefined {
        return this['sprint_id'];
    }
    public withDividend(dividend: MetricRequest2Dividend): MetricRequest2 {
        this['dividend'] = dividend;
        return this;
    }
    public withDivisor(divisor: object): MetricRequest2 {
        this['divisor'] = divisor;
        return this;
    }
}