import { DimensionSeries } from './DimensionSeries';


export class QuerySample {
    public namespace?: string;
    public dimensions?: Array<DimensionSeries>;
    private 'metric_name'?: string;
    public constructor(namespace?: string, dimensions?: Array<DimensionSeries>, metricName?: string) { 
        this['namespace'] = namespace;
        this['dimensions'] = dimensions;
        this['metric_name'] = metricName;
    }
    public withNamespace(namespace: string): QuerySample {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<DimensionSeries>): QuerySample {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): QuerySample {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
}