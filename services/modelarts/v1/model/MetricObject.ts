

export class MetricObject {
    public metric?: string;
    public value?: Array<number>;
    public constructor() { 
    }
    public withMetric(metric: string): MetricObject {
        this['metric'] = metric;
        return this;
    }
    public withValue(value: Array<number>): MetricObject {
        this['value'] = value;
        return this;
    }
}