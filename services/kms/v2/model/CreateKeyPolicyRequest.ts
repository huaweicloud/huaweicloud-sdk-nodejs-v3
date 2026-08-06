import { CreateKeyPolicyRequestBody } from './CreateKeyPolicyRequestBody';


export class CreateKeyPolicyRequest {
    public body?: CreateKeyPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateKeyPolicyRequestBody): CreateKeyPolicyRequest {
        this['body'] = body;
        return this;
    }
}