

export class ShowRiskTrendRequest {
    private 'engine_type'?: string;
    public from?: number;
    public to?: number;
    private 'metric_code'?: string;
    public constructor(engineType?: string, from?: number, to?: number, metricCode?: string) { 
        this['engine_type'] = engineType;
        this['from'] = from;
        this['to'] = to;
        this['metric_code'] = metricCode;
    }
    public withEngineType(engineType: string): ShowRiskTrendRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withFrom(from: number): ShowRiskTrendRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowRiskTrendRequest {
        this['to'] = to;
        return this;
    }
    public withMetricCode(metricCode: string): ShowRiskTrendRequest {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
}