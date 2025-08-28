

export class QueryRiskItemsItems {
    private 'metric_code'?: string;
    public threshold?: number;
    public unit?: string;
    public constructor() { 
    }
    public withMetricCode(metricCode: string): QueryRiskItemsItems {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withThreshold(threshold: number): QueryRiskItemsItems {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: string): QueryRiskItemsItems {
        this['unit'] = unit;
        return this;
    }
}