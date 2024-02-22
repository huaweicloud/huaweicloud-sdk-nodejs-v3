

export class ExtraInfo {
    private 'origin_metric_name'?: string;
    private 'metric_prefix'?: string;
    private 'metric_type'?: string;
    private 'custom_proc_name'?: string;
    public constructor(originMetricName?: string) { 
        this['origin_metric_name'] = originMetricName;
    }
    public withOriginMetricName(originMetricName: string): ExtraInfo {
        this['origin_metric_name'] = originMetricName;
        return this;
    }
    public set originMetricName(originMetricName: string  | undefined) {
        this['origin_metric_name'] = originMetricName;
    }
    public get originMetricName(): string | undefined {
        return this['origin_metric_name'];
    }
    public withMetricPrefix(metricPrefix: string): ExtraInfo {
        this['metric_prefix'] = metricPrefix;
        return this;
    }
    public set metricPrefix(metricPrefix: string  | undefined) {
        this['metric_prefix'] = metricPrefix;
    }
    public get metricPrefix(): string | undefined {
        return this['metric_prefix'];
    }
    public withMetricType(metricType: string): ExtraInfo {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
    public withCustomProcName(customProcName: string): ExtraInfo {
        this['custom_proc_name'] = customProcName;
        return this;
    }
    public set customProcName(customProcName: string  | undefined) {
        this['custom_proc_name'] = customProcName;
    }
    public get customProcName(): string | undefined {
        return this['custom_proc_name'];
    }
}