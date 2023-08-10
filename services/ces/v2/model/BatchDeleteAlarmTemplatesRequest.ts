import { BatchDeleteAlarmTemplatesRequestBody } from './BatchDeleteAlarmTemplatesRequestBody';


export class BatchDeleteAlarmTemplatesRequest {
    public body?: BatchDeleteAlarmTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteAlarmTemplatesRequestBody): BatchDeleteAlarmTemplatesRequest {
        this['body'] = body;
        return this;
    }
}