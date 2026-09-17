

export class ListRisksRequest {
    public from?: number;
    public to?: number;
    private 'engine_type'?: string;
    public num?: number;
    private 'metric_code'?: string;
    public constructor(from?: number, to?: number, engineType?: string) { 
        this['from'] = from;
        this['to'] = to;
        this['engine_type'] = engineType;
    }
    public withFrom(from: number): ListRisksRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListRisksRequest {
        this['to'] = to;
        return this;
    }
    public withEngineType(engineType: string): ListRisksRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNum(num: number): ListRisksRequest {
        this['num'] = num;
        return this;
    }
    public withMetricCode(metricCode: string): ListRisksRequest {
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