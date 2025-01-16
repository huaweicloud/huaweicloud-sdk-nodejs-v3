import { BatchDeleteZonesRequestBody } from './BatchDeleteZonesRequestBody';


export class BatchDeleteZonesRequest {
    public body?: BatchDeleteZonesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteZonesRequestBody): BatchDeleteZonesRequest {
        this['body'] = body;
        return this;
    }
}