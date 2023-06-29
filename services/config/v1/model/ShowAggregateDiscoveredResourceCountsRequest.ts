import { AggregateDiscoveredResourceCountsRequest } from './AggregateDiscoveredResourceCountsRequest';


export class ShowAggregateDiscoveredResourceCountsRequest {
    public body?: AggregateDiscoveredResourceCountsRequest;
    public constructor() { 
    }
    public withBody(body: AggregateDiscoveredResourceCountsRequest): ShowAggregateDiscoveredResourceCountsRequest {
        this['body'] = body;
        return this;
    }
}