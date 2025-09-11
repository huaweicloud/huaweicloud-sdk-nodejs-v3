

export class MetricNameResult {
    public metric?: string;
    public name?: string;
    public constructor() { 
    }
    public withMetric(metric: string): MetricNameResult {
        this['metric'] = metric;
        return this;
    }
    public withName(name: string): MetricNameResult {
        this['name'] = name;
        return this;
    }
}