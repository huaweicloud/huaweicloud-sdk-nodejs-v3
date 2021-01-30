import { CreateAgencyCustomPolicyRequestBody } from './CreateAgencyCustomPolicyRequestBody';


export class CreateAgencyCustomPolicyRequest {
    public body?: CreateAgencyCustomPolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAgencyCustomPolicyRequestBody): CreateAgencyCustomPolicyRequest {
        this['body'] = body;
        return this;
    }
}