import { AggregateDiscoveredResourcesRequest } from './AggregateDiscoveredResourcesRequest';


export class ListAggregateDiscoveredResourcesRequest {
    public limit?: number;
    public marker?: string;
    public body?: AggregateDiscoveredResourcesRequest;
    public constructor() { 
    }
    public withLimit(limit: number): ListAggregateDiscoveredResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAggregateDiscoveredResourcesRequest {
        this['marker'] = marker;
        return this;
    }
    public withBody(body: AggregateDiscoveredResourcesRequest): ListAggregateDiscoveredResourcesRequest {
        this['body'] = body;
        return this;
    }
}