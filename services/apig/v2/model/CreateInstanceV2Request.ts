import { InstanceCreateReq } from './InstanceCreateReq';


export class CreateInstanceV2Request {
    public body?: InstanceCreateReq;
    public constructor() { 
    }
    public withBody(body: InstanceCreateReq): CreateInstanceV2Request {
        this['body'] = body;
        return this;
    }
}