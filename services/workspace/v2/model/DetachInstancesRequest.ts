import { DetachInstancesReq } from './DetachInstancesReq';


export class DetachInstancesRequest {
    public body?: DetachInstancesReq;
    public constructor() { 
    }
    public withBody(body: DetachInstancesReq): DetachInstancesRequest {
        this['body'] = body;
        return this;
    }
}