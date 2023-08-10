import { MetricsDimension } from './MetricsDimension';


export class MetricInfo {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<MetricsDimension>;
    public constructor(namespace?: string, metricName?: string, dimensions?: Array<MetricsDimension>) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): MetricInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): MetricInfo {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<MetricsDimension>): MetricInfo {
        this['dimensions'] = dimensions;
        return this;
    }
}