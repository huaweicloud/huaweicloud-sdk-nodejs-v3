

export class MetricCondition {
    private 'metric_name'?: string;
    private 'metric_value'?: number;
    private 'compare_mode'?: string;
    public constructor() { 
    }
    public withMetricName(metricName: string): MetricCondition {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricValue(metricValue: number): MetricCondition {
        this['metric_value'] = metricValue;
        return this;
    }
    public set metricValue(metricValue: number  | undefined) {
        this['metric_value'] = metricValue;
    }
    public get metricValue(): number | undefined {
        return this['metric_value'];
    }
    public withCompareMode(compareMode: string): MetricCondition {
        this['compare_mode'] = compareMode;
        return this;
    }
    public set compareMode(compareMode: string  | undefined) {
        this['compare_mode'] = compareMode;
    }
    public get compareMode(): string | undefined {
        return this['compare_mode'];
    }
}