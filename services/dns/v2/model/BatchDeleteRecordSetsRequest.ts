import { BatchDeleteRecordSetsRequestBody } from './BatchDeleteRecordSetsRequestBody';


export class BatchDeleteRecordSetsRequest {
    public body?: BatchDeleteRecordSetsRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteRecordSetsRequestBody): BatchDeleteRecordSetsRequest {
        this['body'] = body;
        return this;
    }
}