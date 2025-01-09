import { BatchDeleteScreenRecordsRequestBody } from './BatchDeleteScreenRecordsRequestBody';


export class BatchDeleteScreenRecordsRequest {
    public body?: BatchDeleteScreenRecordsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteScreenRecordsRequestBody): BatchDeleteScreenRecordsRequest {
        this['body'] = body;
        return this;
    }
}