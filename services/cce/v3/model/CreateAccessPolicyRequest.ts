import { AccessPolicy } from './AccessPolicy';


export class CreateAccessPolicyRequest {
    public body?: AccessPolicy;
    public constructor() { 
    }
    public withBody(body: AccessPolicy): CreateAccessPolicyRequest {
        this['body'] = body;
        return this;
    }
}