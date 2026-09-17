

export class MetricThresholdItem {
    private 'metric_code'?: string;
    private 'metric_name'?: string;
    public threshold?: number;
    public unit?: string;
    public constructor() { 
    }
    public withMetricCode(metricCode: string): MetricThresholdItem {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withMetricName(metricName: string): MetricThresholdItem {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withThreshold(threshold: number): MetricThresholdItem {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: string): MetricThresholdItem {
        this['unit'] = unit;
        return this;
    }
}