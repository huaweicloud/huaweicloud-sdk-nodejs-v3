import { BatchCreatePublicRecordsetsTaskRequestBody } from './BatchCreatePublicRecordsetsTaskRequestBody';


export class BatchCreatePublicRecordsetsTaskRequest {
    public body?: BatchCreatePublicRecordsetsTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreatePublicRecordsetsTaskRequestBody): BatchCreatePublicRecordsetsTaskRequest {
        this['body'] = body;
        return this;
    }
}