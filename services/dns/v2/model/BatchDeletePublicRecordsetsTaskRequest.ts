import { BatchDeletePublicRecordsetsTaskRequestBody } from './BatchDeletePublicRecordsetsTaskRequestBody';


export class BatchDeletePublicRecordsetsTaskRequest {
    public body?: BatchDeletePublicRecordsetsTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeletePublicRecordsetsTaskRequestBody): BatchDeletePublicRecordsetsTaskRequest {
        this['body'] = body;
        return this;
    }
}