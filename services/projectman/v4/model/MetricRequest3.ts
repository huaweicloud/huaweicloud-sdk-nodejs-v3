import { MetricRequest3Dividend } from './MetricRequest3Dividend';


export class MetricRequest3 {
    private 'date_range'?: string;
    private 'metric_type'?: string;
    private 'sprint_id'?: string;
    public dividend?: MetricRequest3Dividend;
    public divisor?: object;
    public constructor() { 
    }
    public withDateRange(dateRange: string): MetricRequest3 {
        this['date_range'] = dateRange;
        return this;
    }
    public set dateRange(dateRange: string  | undefined) {
        this['date_range'] = dateRange;
    }
    public get dateRange(): string | undefined {
        return this['date_range'];
    }
    public withMetricType(metricType: string): MetricRequest3 {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withSprintId(sprintId: string): MetricRequest3 {
        this['sprint_id'] = sprintId;
        return this;
    }
    public set sprintId(sprintId: string  | undefined) {
        this['sprint_id'] = sprintId;
    }
    public get sprintId(): string | undefined {
        return this['sprint_id'];
    }
    public withDividend(dividend: MetricRequest3Dividend): MetricRequest3 {
        this['dividend'] = dividend;
        return this;
    }
    public withDivisor(divisor: object): MetricRequest3 {
        this['divisor'] = divisor;
        return this;
    }
}