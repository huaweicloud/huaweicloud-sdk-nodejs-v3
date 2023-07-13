import { ResourcesFilters } from './ResourcesFilters';


export class AggregateDiscoveredResourcesRequest {
    private 'aggregator_id': string | undefined;
    public filter?: ResourcesFilters;
    public provider?: string;
    private 'resource_type'?: string | undefined;
    public constructor(aggregatorId?: any) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): AggregateDiscoveredResourcesRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withFilter(filter: ResourcesFilters): AggregateDiscoveredResourcesRequest {
        this['filter'] = filter;
        return this;
    }
    public withProvider(provider: string): AggregateDiscoveredResourcesRequest {
        this['provider'] = provider;
        return this;
    }
    public withResourceType(resourceType: string): AggregateDiscoveredResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}