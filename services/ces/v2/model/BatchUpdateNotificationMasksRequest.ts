import { BatchUpdateNotificationMasksRequestBody } from './BatchUpdateNotificationMasksRequestBody';


export class BatchUpdateNotificationMasksRequest {
    public body?: BatchUpdateNotificationMasksRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateNotificationMasksRequestBody): BatchUpdateNotificationMasksRequest {
        this['body'] = body;
        return this;
    }
}