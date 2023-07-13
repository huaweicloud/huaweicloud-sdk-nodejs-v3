import { AggregateResourceConfigRequest } from './AggregateResourceConfigRequest';


export class ShowAggregateResourceConfigRequest {
    public body?: AggregateResourceConfigRequest;
    public constructor() { 
    }
    public withBody(body: AggregateResourceConfigRequest): ShowAggregateResourceConfigRequest {
        this['body'] = body;
        return this;
    }
}