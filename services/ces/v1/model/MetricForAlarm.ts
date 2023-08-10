import { MetricsDimension } from './MetricsDimension';


export class MetricForAlarm {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<MetricsDimension>;
    private 'resource_group_id'?: string;
    public constructor(namespace?: string, metricName?: string) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
    }
    public withNamespace(namespace: string): MetricForAlarm {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): MetricForAlarm {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<MetricsDimension>): MetricForAlarm {
        this['dimensions'] = dimensions;
        return this;
    }
    public withResourceGroupId(resourceGroupId: string): MetricForAlarm {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
}