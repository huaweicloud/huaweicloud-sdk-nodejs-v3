import { BatchSubscriptionsFilterPolicesRequestBody } from './BatchSubscriptionsFilterPolicesRequestBody';


export class BatchUpdateSubscriptionsFilterPolicesRequest {
    public body?: BatchSubscriptionsFilterPolicesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSubscriptionsFilterPolicesRequestBody): BatchUpdateSubscriptionsFilterPolicesRequest {
        this['body'] = body;
        return this;
    }
}