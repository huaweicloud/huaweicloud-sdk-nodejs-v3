

export class RiskItemInfo {
    private 'metric_code'?: string;
    public threshold?: number;
    public unit?: string;
    public constructor() { 
    }
    public withMetricCode(metricCode: string): RiskItemInfo {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withThreshold(threshold: number): RiskItemInfo {
        this['threshold'] = threshold;
        return this;
    }
    public withUnit(unit: string): RiskItemInfo {
        this['unit'] = unit;
        return this;
    }
}