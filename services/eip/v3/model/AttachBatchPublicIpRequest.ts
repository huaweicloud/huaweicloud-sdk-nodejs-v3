import { BatchAttachSharebwReq } from './BatchAttachSharebwReq';


export class AttachBatchPublicIpRequest {
    public body?: BatchAttachSharebwReq;
    public constructor() { 
    }
    public withBody(body: BatchAttachSharebwReq): AttachBatchPublicIpRequest {
        this['body'] = body;
        return this;
    }
}