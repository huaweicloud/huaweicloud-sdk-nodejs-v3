

export class ExportInstanceListNewRequestBody {
    private 'engine_type'?: string;
    private 'engine_group'?: string;
    private 'instance_status'?: string;
    private 'order_value'?: string;
    private 'metric_names'?: Array<string>;
    public constructor(engineType?: string, engineGroup?: string, instanceStatus?: string) { 
        this['engine_type'] = engineType;
        this['engine_group'] = engineGroup;
        this['instance_status'] = instanceStatus;
    }
    public withEngineType(engineType: string): ExportInstanceListNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withEngineGroup(engineGroup: string): ExportInstanceListNewRequestBody {
        this['engine_group'] = engineGroup;
        return this;
    }
    public set engineGroup(engineGroup: string  | undefined) {
        this['engine_group'] = engineGroup;
    }
    public get engineGroup(): string | undefined {
        return this['engine_group'];
    }
    public withInstanceStatus(instanceStatus: string): ExportInstanceListNewRequestBody {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withOrderValue(orderValue: string): ExportInstanceListNewRequestBody {
        this['order_value'] = orderValue;
        return this;
    }
    public set orderValue(orderValue: string  | undefined) {
        this['order_value'] = orderValue;
    }
    public get orderValue(): string | undefined {
        return this['order_value'];
    }
    public withMetricNames(metricNames: Array<string>): ExportInstanceListNewRequestBody {
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