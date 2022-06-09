import { CreateL7policyRequestBody } from './CreateL7policyRequestBody';


export class CreateL7policyRequest {
    public body?: CreateL7policyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateL7policyRequestBody): CreateL7policyRequest {
        this['body'] = body;
        return this;
    }
}