

export class ShowGrowthRateRequest {
    public dim?: string;
    private 'metric_name'?: string;
    private 'grow_period'?: ShowGrowthRateRequestGrowPeriodEnum | string;
    public constructor(metricName?: string) { 
        this['metric_name'] = metricName;
    }
    public withDim(dim: string): ShowGrowthRateRequest {
        this['dim'] = dim;
        return this;
    }
    public withMetricName(metricName: string): ShowGrowthRateRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withGrowPeriod(growPeriod: ShowGrowthRateRequestGrowPeriodEnum | string): ShowGrowthRateRequest {
        this['grow_period'] = growPeriod;
        return this;
    }
    public set growPeriod(growPeriod: ShowGrowthRateRequestGrowPeriodEnum | string  | undefined) {
        this['grow_period'] = growPeriod;
    }
    public get growPeriod(): ShowGrowthRateRequestGrowPeriodEnum | string | undefined {
        return this['grow_period'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGrowthRateRequestGrowPeriodEnum {
    DAY = 'DAY',
    MONTH = 'MONTH'
}
