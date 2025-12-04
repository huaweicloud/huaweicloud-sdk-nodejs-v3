import { ModifyRecyclePolicyReq } from './ModifyRecyclePolicyReq';


export class ModifyRecyclePolicyRequest {
    public body?: ModifyRecyclePolicyReq;
    public constructor() { 
    }
    public withBody(body: ModifyRecyclePolicyReq): ModifyRecyclePolicyRequest {
        this['body'] = body;
        return this;
    }
}