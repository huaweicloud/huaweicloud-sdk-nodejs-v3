import { BatchDeleteInstanceReq } from './BatchDeleteInstanceReq';


export class BatchDeleteInstancesRequest {
    public body?: BatchDeleteInstanceReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteInstanceReq): BatchDeleteInstancesRequest {
        this['body'] = body;
        return this;
    }
}