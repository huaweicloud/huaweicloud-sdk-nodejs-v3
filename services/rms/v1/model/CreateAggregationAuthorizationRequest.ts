import { AggregationAuthorizationRequest } from './AggregationAuthorizationRequest';


export class CreateAggregationAuthorizationRequest {
    public body?: AggregationAuthorizationRequest;
    public constructor() { 
    }
    public withBody(body: AggregationAuthorizationRequest): CreateAggregationAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}