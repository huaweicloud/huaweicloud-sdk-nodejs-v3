import { PreBatchAttachInstancesReq } from './PreBatchAttachInstancesReq';


export class BatchAssociateInstancesRequest {
    public body?: PreBatchAttachInstancesReq;
    public constructor() { 
    }
    public withBody(body: PreBatchAttachInstancesReq): BatchAssociateInstancesRequest {
        this['body'] = body;
        return this;
    }
}