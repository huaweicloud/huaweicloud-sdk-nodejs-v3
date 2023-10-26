import { DimensionSeries } from './DimensionSeries';


export class QuerySeriesOptionParam {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<DimensionSeries>;
    public constructor(namespace?: string) { 
        this['namespace'] = namespace;
    }
    public withNamespace(namespace: string): QuerySeriesOptionParam {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): QuerySeriesOptionParam {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<DimensionSeries>): QuerySeriesOptionParam {
        this['dimensions'] = dimensions;
        return this;
    }
}