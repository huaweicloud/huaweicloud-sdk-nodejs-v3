import { CreateTemplatesRequestBody } from './CreateTemplatesRequestBody';


export class CreateTemplateRequest {
    public body?: CreateTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemplatesRequestBody): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}