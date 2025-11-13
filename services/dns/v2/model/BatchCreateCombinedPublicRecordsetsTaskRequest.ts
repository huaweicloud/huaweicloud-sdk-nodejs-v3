import { BatchCreateCombinedPublicRecordsetsTaskRequestBody } from './BatchCreateCombinedPublicRecordsetsTaskRequestBody';


export class BatchCreateCombinedPublicRecordsetsTaskRequest {
    public body?: BatchCreateCombinedPublicRecordsetsTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateCombinedPublicRecordsetsTaskRequestBody): BatchCreateCombinedPublicRecordsetsTaskRequest {
        this['body'] = body;
        return this;
    }
}