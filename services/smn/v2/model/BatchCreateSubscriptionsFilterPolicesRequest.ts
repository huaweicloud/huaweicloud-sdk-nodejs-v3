import { BatchSubscriptionsFilterPolicesRequestBody } from './BatchSubscriptionsFilterPolicesRequestBody';


export class BatchCreateSubscriptionsFilterPolicesRequest {
    public body?: BatchSubscriptionsFilterPolicesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSubscriptionsFilterPolicesRequestBody): BatchCreateSubscriptionsFilterPolicesRequest {
        this['body'] = body;
        return this;
    }
}