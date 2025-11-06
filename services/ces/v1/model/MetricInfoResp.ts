import { MetricsDimension } from './MetricsDimension';


export class MetricInfoResp {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<MetricsDimension>;
    public constructor() { 
    }
    public withNamespace(namespace: string): MetricInfoResp {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): MetricInfoResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<MetricsDimension>): MetricInfoResp {
        this['dimensions'] = dimensions;
        return this;
    }
}