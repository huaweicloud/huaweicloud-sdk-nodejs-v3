import { BatchSetRecordSetsStatusRequestBody } from './BatchSetRecordSetsStatusRequestBody';


export class BatchSetRecordSetsStatusRequest {
    public body?: BatchSetRecordSetsStatusRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSetRecordSetsStatusRequestBody): BatchSetRecordSetsStatusRequest {
        this['body'] = body;
        return this;
    }
}