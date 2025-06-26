import { CreatePolicyGroupReq } from './CreatePolicyGroupReq';


export class CreatePolicyGroupRequest {
    public body?: CreatePolicyGroupReq;
    public constructor() { 
    }
    public withBody(body: CreatePolicyGroupReq): CreatePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}