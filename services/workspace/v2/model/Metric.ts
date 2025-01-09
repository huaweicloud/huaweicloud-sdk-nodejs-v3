

export class Metric {
    private 'metric_name'?: string;
    private 'metric_value'?: number;
    public constructor() { 
    }
    public withMetricName(metricName: string): Metric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricValue(metricValue: number): Metric {
        this['metric_value'] = metricValue;
        return this;
    }
    public set metricValue(metricValue: number  | undefined) {
        this['metric_value'] = metricValue;
    }
    public get metricValue(): number | undefined {
        return this['metric_value'];
    }
}