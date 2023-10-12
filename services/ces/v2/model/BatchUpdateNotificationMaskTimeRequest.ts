import { BatchUpdateNotificationMaskTimeRequestBody } from './BatchUpdateNotificationMaskTimeRequestBody';


export class BatchUpdateNotificationMaskTimeRequest {
    public body?: BatchUpdateNotificationMaskTimeRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateNotificationMaskTimeRequestBody): BatchUpdateNotificationMaskTimeRequest {
        this['body'] = body;
        return this;
    }
}