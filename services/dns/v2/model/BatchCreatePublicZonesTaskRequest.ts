import { BatchCreatePublicZonesTaskRequestBody } from './BatchCreatePublicZonesTaskRequestBody';


export class BatchCreatePublicZonesTaskRequest {
    public body?: BatchCreatePublicZonesTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreatePublicZonesTaskRequestBody): BatchCreatePublicZonesTaskRequest {
        this['body'] = body;
        return this;
    }
}