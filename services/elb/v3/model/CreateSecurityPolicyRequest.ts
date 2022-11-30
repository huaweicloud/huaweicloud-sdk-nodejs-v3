import { CreateSecurityPolicyRequestBody } from './CreateSecurityPolicyRequestBody';


export class CreateSecurityPolicyRequest {
    public body?: CreateSecurityPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSecurityPolicyRequestBody): CreateSecurityPolicyRequest {
        this['body'] = body;
        return this;
    }
}