import { MetricsDimension } from './MetricsDimension';


export class MetricInfoList {
    public dimensions?: Array<MetricsDimension>;
    private 'metric_name'?: string;
    public namespace?: string;
    public unit?: string;
    public constructor(dimensions?: Array<MetricsDimension>, metricName?: string, namespace?: string, unit?: string) { 
        this['dimensions'] = dimensions;
        this['metric_name'] = metricName;
        this['namespace'] = namespace;
        this['unit'] = unit;
    }
    public withDimensions(dimensions: Array<MetricsDimension>): MetricInfoList {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): MetricInfoList {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withNamespace(namespace: string): MetricInfoList {
        this['namespace'] = namespace;
        return this;
    }
    public withUnit(unit: string): MetricInfoList {
        this['unit'] = unit;
        return this;
    }
}