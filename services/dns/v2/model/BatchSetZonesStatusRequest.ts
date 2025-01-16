import { BatchSetZonesStatusRequestBody } from './BatchSetZonesStatusRequestBody';


export class BatchSetZonesStatusRequest {
    public body?: BatchSetZonesStatusRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSetZonesStatusRequestBody): BatchSetZonesStatusRequest {
        this['body'] = body;
        return this;
    }
}