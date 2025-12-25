import { CreateMetricDimension } from './CreateMetricDimension';


export class CreateAlarmMetric {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<CreateMetricDimension>;
    private 'resource_group_id'?: string;
    public constructor(namespace?: string, metricName?: string) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
    }
    public withNamespace(namespace: string): CreateAlarmMetric {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): CreateAlarmMetric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<CreateMetricDimension>): CreateAlarmMetric {
        this['dimensions'] = dimensions;
        return this;
    }
    public withResourceGroupId(resourceGroupId: string): CreateAlarmMetric {
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