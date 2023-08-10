import { MetricInfo } from './MetricInfo';
import { MetricsDimension } from './MetricsDimension';


export class MetricInfoForAlarm {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<MetricsDimension>;
    private 'resource_group_id'?: string;
    private 'resource_group_name'?: string;
    public constructor(namespace?: string, metricName?: string, dimensions?: Array<MetricsDimension>) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['dimensions'] = dimensions;
    }
    public withNamespace(namespace: string): MetricInfoForAlarm {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): MetricInfoForAlarm {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<MetricsDimension>): MetricInfoForAlarm {
        this['dimensions'] = dimensions;
        return this;
    }
    public withResourceGroupId(resourceGroupId: string): MetricInfoForAlarm {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
    public withResourceGroupName(resourceGroupName: string): MetricInfoForAlarm {
        this['resource_group_name'] = resourceGroupName;
        return this;
    }
    public set resourceGroupName(resourceGroupName: string  | undefined) {
        this['resource_group_name'] = resourceGroupName;
    }
    public get resourceGroupName(): string | undefined {
        return this['resource_group_name'];
    }
}