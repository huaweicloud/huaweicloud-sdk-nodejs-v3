import { CreateCustomTemplateBody } from './CreateCustomTemplateBody';


export class CreateCustomTemplateRequest {
    public body?: CreateCustomTemplateBody;
    public constructor() { 
    }
    public withBody(body: CreateCustomTemplateBody): CreateCustomTemplateRequest {
        this['body'] = body;
        return this;
    }
}