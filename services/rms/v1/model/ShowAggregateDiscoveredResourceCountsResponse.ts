import { GroupedResourceCount } from './GroupedResourceCount';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregateDiscoveredResourceCountsResponse extends SdkResponse {
    private 'group_by_key'?: string | undefined;
    private 'grouped_resource_counts'?: Array<GroupedResourceCount> | undefined;
    private 'total_discovered_resources'?: number | undefined;
    public constructor() { 
        super();
    }
    public withGroupByKey(groupByKey: string): ShowAggregateDiscoveredResourceCountsResponse {
        this['group_by_key'] = groupByKey;
        return this;
    }
    public set groupByKey(groupByKey: string | undefined) {
        this['group_by_key'] = groupByKey;
    }
    public get groupByKey() {
        return this['group_by_key'];
    }
    public withGroupedResourceCounts(groupedResourceCounts: Array<GroupedResourceCount>): ShowAggregateDiscoveredResourceCountsResponse {
        this['grouped_resource_counts'] = groupedResourceCounts;
        return this;
    }
    public set groupedResourceCounts(groupedResourceCounts: Array<GroupedResourceCount> | undefined) {
        this['grouped_resource_counts'] = groupedResourceCounts;
    }
    public get groupedResourceCounts() {
        return this['grouped_resource_counts'];
    }
    public withTotalDiscoveredResources(totalDiscoveredResources: number): ShowAggregateDiscoveredResourceCountsResponse {
        this['total_discovered_resources'] = totalDiscoveredResources;
        return this;
    }
    public set totalDiscoveredResources(totalDiscoveredResources: number | undefined) {
        this['total_discovered_resources'] = totalDiscoveredResources;
    }
    public get totalDiscoveredResources() {
        return this['total_discovered_resources'];
    }
}