import { BatchDeleteSubscriptionsFilterPolicesRequestBody } from './BatchDeleteSubscriptionsFilterPolicesRequestBody';


export class BatchDeleteSubscriptionsFilterPolicesRequest {
    public body?: BatchDeleteSubscriptionsFilterPolicesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteSubscriptionsFilterPolicesRequestBody): BatchDeleteSubscriptionsFilterPolicesRequest {
        this['body'] = body;
        return this;
    }
}