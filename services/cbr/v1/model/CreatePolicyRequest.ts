import { PolicyCreateReq } from './PolicyCreateReq';


export class CreatePolicyRequest {
    public body?: PolicyCreateReq;
    public constructor() { 
    }
    public withBody(body: PolicyCreateReq): CreatePolicyRequest {
        this['body'] = body;
        return this;
    }
}