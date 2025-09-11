

export class BatchListSpecifiedMetricDataRequestBody {
    public namespace?: string;
    private 'metric_name'?: string;
    private 'metric_dimension'?: string;
    public from?: number;
    public to?: number;
    public limit?: number;
    public offset?: number;
    public constructor(namespace?: string, metricName?: string, metricDimension?: string) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['metric_dimension'] = metricDimension;
    }
    public withNamespace(namespace: string): BatchListSpecifiedMetricDataRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): BatchListSpecifiedMetricDataRequestBody {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricDimension(metricDimension: string): BatchListSpecifiedMetricDataRequestBody {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: string  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): string | undefined {
        return this['metric_dimension'];
    }
    public withFrom(from: number): BatchListSpecifiedMetricDataRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): BatchListSpecifiedMetricDataRequestBody {
        this['to'] = to;
        return this;
    }
    public withLimit(limit: number): BatchListSpecifiedMetricDataRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BatchListSpecifiedMetricDataRequestBody {
        this['offset'] = offset;
        return this;
    }
}