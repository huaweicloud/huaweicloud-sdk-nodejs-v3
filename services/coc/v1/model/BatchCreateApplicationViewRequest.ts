import { BatchCreateApplicationViewRequestBody } from './BatchCreateApplicationViewRequestBody';


export class BatchCreateApplicationViewRequest {
    public body?: BatchCreateApplicationViewRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateApplicationViewRequestBody): BatchCreateApplicationViewRequest {
        this['body'] = body;
        return this;
    }
}