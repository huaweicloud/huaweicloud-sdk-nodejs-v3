import { PolicyStateRequestBody } from './PolicyStateRequestBody';


export class UpdatePolicyStateRequest {
    public body?: PolicyStateRequestBody;
    public constructor() { 
    }
    public withBody(body: PolicyStateRequestBody): UpdatePolicyStateRequest {
        this['body'] = body;
        return this;
    }
}