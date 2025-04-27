import { BatchDeletePtrRecordsRequestBody } from './BatchDeletePtrRecordsRequestBody';


export class BatchDeletePtrRecordsRequest {
    public body?: BatchDeletePtrRecordsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeletePtrRecordsRequestBody): BatchDeletePtrRecordsRequest {
        this['body'] = body;
        return this;
    }
}