import { Dimension } from './Dimension';


export class MetricQueryMetricParam {
    public dimensions?: Array<Dimension>;
    public metricName?: string;
    public namespace?: string;
    public constructor(dimensions?: Array<Dimension>, metricName?: string, namespace?: string) { 
        this['dimensions'] = dimensions;
        this['metricName'] = metricName;
        this['namespace'] = namespace;
    }
    public withDimensions(dimensions: Array<Dimension>): MetricQueryMetricParam {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): MetricQueryMetricParam {
        this['metricName'] = metricName;
        return this;
    }
    public withNamespace(namespace: string): MetricQueryMetricParam {
        this['namespace'] = namespace;
        return this;
    }
}