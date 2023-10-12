import { BatchDeleteNotificationMasksRequestBody } from './BatchDeleteNotificationMasksRequestBody';


export class BatchDeleteNotificationMasksRequest {
    public body?: BatchDeleteNotificationMasksRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteNotificationMasksRequestBody): BatchDeleteNotificationMasksRequest {
        this['body'] = body;
        return this;
    }
}