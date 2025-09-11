import { BatchDeleteSubscriptionsRequestBody } from './BatchDeleteSubscriptionsRequestBody';


export class BatchDeleteSubscriptionsRequest {
    public body?: BatchDeleteSubscriptionsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteSubscriptionsRequestBody): BatchDeleteSubscriptionsRequest {
        this['body'] = body;
        return this;
    }
}