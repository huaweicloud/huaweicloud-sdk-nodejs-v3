import { MetricDimensionResp } from './MetricDimensionResp';


export class ResourcesInListResp {
    private 'resource_group_id'?: string;
    private 'resource_group_name'?: string;
    public dimensions?: Array<MetricDimensionResp>;
    public constructor() { 
    }
    public withResourceGroupId(resourceGroupId: string): ResourcesInListResp {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: string  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): string | undefined {
        return this['resource_group_id'];
    }
    public withResourceGroupName(resourceGroupName: string): ResourcesInListResp {
        this['resource_group_name'] = resourceGroupName;
        return this;
    }
    public set resourceGroupName(resourceGroupName: string  | undefined) {
        this['resource_group_name'] = resourceGroupName;
    }
    public get resourceGroupName(): string | undefined {
        return this['resource_group_name'];
    }
    public withDimensions(dimensions: Array<MetricDimensionResp>): ResourcesInListResp {
        this['dimensions'] = dimensions;
        return this;
    }
}