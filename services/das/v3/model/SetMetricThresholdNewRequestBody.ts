

export class SetMetricThresholdNewRequestBody {
    private 'metric_code'?: string;
    private 'engine_type'?: string;
    private 'new_threshold'?: number;
    public constructor(metricCode?: string, engineType?: string, newThreshold?: number) { 
        this['metric_code'] = metricCode;
        this['engine_type'] = engineType;
        this['new_threshold'] = newThreshold;
    }
    public withMetricCode(metricCode: string): SetMetricThresholdNewRequestBody {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withEngineType(engineType: string): SetMetricThresholdNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNewThreshold(newThreshold: number): SetMetricThresholdNewRequestBody {
        this['new_threshold'] = newThreshold;
        return this;
    }
    public set newThreshold(newThreshold: number  | undefined) {
        this['new_threshold'] = newThreshold;
    }
    public get newThreshold(): number | undefined {
        return this['new_threshold'];
    }
}