import { MetricRequestV2Dividend } from './MetricRequestV2Dividend';


export class MetricRequestV2 {
    private 'date_range'?: string;
    private 'metric_type'?: string;
    public dividend?: MetricRequestV2Dividend;
    public divisor?: object;
    public constructor() { 
    }
    public withDateRange(dateRange: string): MetricRequestV2 {
        this['date_range'] = dateRange;
        return this;
    }
    public set dateRange(dateRange: string  | undefined) {
        this['date_range'] = dateRange;
    }
    public get dateRange(): string | undefined {
        return this['date_range'];
    }
    public withMetricType(metricType: string): MetricRequestV2 {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withDividend(dividend: MetricRequestV2Dividend): MetricRequestV2 {
        this['dividend'] = dividend;
        return this;
    }
    public withDivisor(divisor: object): MetricRequestV2 {
        this['divisor'] = divisor;
        return this;
    }
}