import { CreateAccessPolicyReq } from './CreateAccessPolicyReq';


export class CreateAccessPolicyRequest {
    public body?: CreateAccessPolicyReq;
    public constructor() { 
    }
    public withBody(body: CreateAccessPolicyReq): CreateAccessPolicyRequest {
        this['body'] = body;
        return this;
    }
}