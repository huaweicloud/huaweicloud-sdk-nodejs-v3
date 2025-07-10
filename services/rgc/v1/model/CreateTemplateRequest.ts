import { CreateTemplateRequestBody } from './CreateTemplateRequestBody';


export class CreateTemplateRequest {
    public body?: CreateTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemplateRequestBody): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}