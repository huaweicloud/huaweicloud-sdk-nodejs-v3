import { CreatePolicyRequestBody } from './CreatePolicyRequestBody';


export class CreatePolicyRequest {
    public body?: CreatePolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePolicyRequestBody): CreatePolicyRequest {
        this['body'] = body;
        return this;
    }
}