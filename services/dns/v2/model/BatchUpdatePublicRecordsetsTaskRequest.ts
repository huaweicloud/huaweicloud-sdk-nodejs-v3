import { BatchUpdatePublicRecordsetsTaskRequestBody } from './BatchUpdatePublicRecordsetsTaskRequestBody';


export class BatchUpdatePublicRecordsetsTaskRequest {
    public body?: BatchUpdatePublicRecordsetsTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdatePublicRecordsetsTaskRequestBody): BatchUpdatePublicRecordsetsTaskRequest {
        this['body'] = body;
        return this;
    }
}