

export class MetricNamesSupportItem {
    private 'engine_types'?: Array<string>;
    private 'metric_name'?: string;
    public unit?: string;
    private 'metric_name_des'?: string;
    public constructor() { 
    }
    public withEngineTypes(engineTypes: Array<string>): MetricNamesSupportItem {
        this['engine_types'] = engineTypes;
        return this;
    }
    public set engineTypes(engineTypes: Array<string>  | undefined) {
        this['engine_types'] = engineTypes;
    }
    public get engineTypes(): Array<string> | undefined {
        return this['engine_types'];
    }
    public withMetricName(metricName: string): MetricNamesSupportItem {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withUnit(unit: string): MetricNamesSupportItem {
        this['unit'] = unit;
        return this;
    }
    public withMetricNameDes(metricNameDes: string): MetricNamesSupportItem {
        this['metric_name_des'] = metricNameDes;
        return this;
    }
    public set metricNameDes(metricNameDes: string  | undefined) {
        this['metric_name_des'] = metricNameDes;
    }
    public get metricNameDes(): string | undefined {
        return this['metric_name_des'];
    }
}