import { BatchAttachInstancesReq } from './BatchAttachInstancesReq';


export class BatchAttachInstancesRequest {
    public body?: BatchAttachInstancesReq;
    public constructor() { 
    }
    public withBody(body: BatchAttachInstancesReq): BatchAttachInstancesRequest {
        this['body'] = body;
        return this;
    }
}