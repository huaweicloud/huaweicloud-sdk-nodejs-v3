import { AttachInstancesReq } from './AttachInstancesReq';


export class AttachInstancesRequest {
    public body?: AttachInstancesReq;
    public constructor() { 
    }
    public withBody(body: AttachInstancesReq): AttachInstancesRequest {
        this['body'] = body;
        return this;
    }
}