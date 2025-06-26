import { BatchDeleteImageServerReq } from './BatchDeleteImageServerReq';


export class BatchDeleteImageServerRequest {
    public body?: BatchDeleteImageServerReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteImageServerReq): BatchDeleteImageServerRequest {
        this['body'] = body;
        return this;
    }
}