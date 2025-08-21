import { CreateTemplateRequestBody } from './CreateTemplateRequestBody';


export class CreateDomainTemplateRequest {
    public body?: CreateTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemplateRequestBody): CreateDomainTemplateRequest {
        this['body'] = body;
        return this;
    }
}