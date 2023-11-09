import { CreateTemplate } from './CreateTemplate';


export class CreateTemplateRequest {
    public body?: CreateTemplate;
    public constructor() { 
    }
    public withBody(body: CreateTemplate): CreateTemplateRequest {
        this['body'] = body;
        return this;
    }
}