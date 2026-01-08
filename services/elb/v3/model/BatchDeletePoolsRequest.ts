import { BatchDeletePoolsRequestBody } from './BatchDeletePoolsRequestBody';


export class BatchDeletePoolsRequest {
    public body?: BatchDeletePoolsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeletePoolsRequestBody): BatchDeletePoolsRequest {
        this['body'] = body;
        return this;
    }
}