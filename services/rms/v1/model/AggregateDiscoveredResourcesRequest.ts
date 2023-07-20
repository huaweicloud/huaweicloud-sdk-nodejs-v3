import { ResourcesFilters } from './ResourcesFilters';


export class AggregateDiscoveredResourcesRequest {
    private 'aggregator_id'?: string;
    public filter?: ResourcesFilters;
    public provider?: string;
    private 'resource_type'?: string;
    public constructor(aggregatorId?: string) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): AggregateDiscoveredResourcesRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
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
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}