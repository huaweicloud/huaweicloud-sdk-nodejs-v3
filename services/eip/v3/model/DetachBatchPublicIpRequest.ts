import { DetachBatchSharedbwReq } from './DetachBatchSharedbwReq';


export class DetachBatchPublicIpRequest {
    public body?: DetachBatchSharedbwReq;
    public constructor() { 
    }
    public withBody(body: DetachBatchSharedbwReq): DetachBatchPublicIpRequest {
        this['body'] = body;
        return this;
    }
}