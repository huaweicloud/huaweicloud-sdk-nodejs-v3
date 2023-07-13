import { BatchRestartOrDeleteInstanceReq } from './BatchRestartOrDeleteInstanceReq';


export class BatchRestartOrDeleteInstancesRequest {
    public body?: BatchRestartOrDeleteInstanceReq;
    public constructor() { 
    }
    public withBody(body: BatchRestartOrDeleteInstanceReq): BatchRestartOrDeleteInstancesRequest {
        this['body'] = body;
        return this;
    }
}