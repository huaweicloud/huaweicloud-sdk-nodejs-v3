

export class ShowMetricThresholdRequestBody {
    private 'engine_type'?: string;
    private 'metric_names'?: Array<string>;
    public constructor(engineType?: string, metricNames?: Array<string>) { 
        this['engine_type'] = engineType;
        this['metric_names'] = metricNames;
    }
    public withEngineType(engineType: string): ShowMetricThresholdRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withMetricNames(metricNames: Array<string>): ShowMetricThresholdRequestBody {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
}