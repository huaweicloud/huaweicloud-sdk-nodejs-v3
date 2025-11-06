import { DimensionResp } from './DimensionResp';


export class ListAlarmMetricResp {
    public namespace?: string;
    public dimensions?: Array<DimensionResp>;
    private 'metric_name'?: string;
    private 'resource_group_id'?: string;
    private 'resource_group_name'?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ListAlarmMetricResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensions(dimensions: Array<DimensionResp>): ListAlarmMetricResp {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): ListAlarmMetricResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withResourceGroupId(resourceGroupId: string): ListAlarmMetricResp {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
    public withResourceGroupName(resourceGroupName: string): ListAlarmMetricResp {
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