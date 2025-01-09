import { BatchDetachInstancesReq } from './BatchDetachInstancesReq';


export class BatchDetachInstancesRequest {
    public body?: BatchDetachInstancesReq;
    public constructor() { 
    }
    public withBody(body: BatchDetachInstancesReq): BatchDetachInstancesRequest {
        this['body'] = body;
        return this;
    }
}