import { Dimension } from './Dimension';


export class MetricQueryMeritcParam {
    public dimensions?: Array<Dimension>;
    public metricName?: string;
    public namespace?: string;
    public constructor(dimensions?: Array<Dimension>, metricName?: string, namespace?: string) { 
        this['dimensions'] = dimensions;
        this['metricName'] = metricName;
        this['namespace'] = namespace;
    }
    public withDimensions(dimensions: Array<Dimension>): MetricQueryMeritcParam {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): MetricQueryMeritcParam {
        this['metricName'] = metricName;
        return this;
    }
    public withNamespace(namespace: string): MetricQueryMeritcParam {
        this['namespace'] = namespace;
        return this;
    }
}