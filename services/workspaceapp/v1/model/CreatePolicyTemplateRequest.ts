import { CreatePolicyTemplateReq } from './CreatePolicyTemplateReq';


export class CreatePolicyTemplateRequest {
    public body?: CreatePolicyTemplateReq;
    public constructor() { 
    }
    public withBody(body: CreatePolicyTemplateReq): CreatePolicyTemplateRequest {
        this['body'] = body;
        return this;
    }
}