

export class ProductMetricResp {
    private 'dimension_name'?: string;
    private 'metric_name'?: string;
    public constructor(dimensionName?: string, metricName?: string) { 
        this['dimension_name'] = dimensionName;
        this['metric_name'] = metricName;
    }
    public withDimensionName(dimensionName: string): ProductMetricResp {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withMetricName(metricName: string): ProductMetricResp {
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