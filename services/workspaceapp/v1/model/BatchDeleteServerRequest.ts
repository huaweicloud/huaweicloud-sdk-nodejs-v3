import { BatchDeleteServerReq } from './BatchDeleteServerReq';


export class BatchDeleteServerRequest {
    public body?: BatchDeleteServerReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteServerReq): BatchDeleteServerRequest {
        this['body'] = body;
        return this;
    }
}