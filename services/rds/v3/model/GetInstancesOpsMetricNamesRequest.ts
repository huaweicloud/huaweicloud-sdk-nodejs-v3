

export class GetInstancesOpsMetricNamesRequest {
    private 'instance_id'?: string;
    private 'metric_group'?: string;
    private 'X-Language'?: string;
    public constructor(instanceId?: string, metricGroup?: string) { 
        this['instance_id'] = instanceId;
        this['metric_group'] = metricGroup;
    }
    public withInstanceId(instanceId: string): GetInstancesOpsMetricNamesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMetricGroup(metricGroup: string): GetInstancesOpsMetricNamesRequest {
        this['metric_group'] = metricGroup;
        return this;
    }
    public set metricGroup(metricGroup: string  | undefined) {
        this['metric_group'] = metricGroup;
    }
    public get metricGroup(): string | undefined {
        return this['metric_group'];
    }
    public withXLanguage(xLanguage: string): GetInstancesOpsMetricNamesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}