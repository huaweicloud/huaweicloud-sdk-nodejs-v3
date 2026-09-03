

export class MetricItem {
    public metric?: string;
    public name?: string;
    public filter?: string;
    public constructor() { 
    }
    public withMetric(metric: string): MetricItem {
        this['metric'] = metric;
        return this;
    }
    public withName(name: string): MetricItem {
        this['name'] = name;
        return this;
    }
    public withFilter(filter: string): MetricItem {
        this['filter'] = filter;
        return this;
    }
}