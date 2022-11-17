import { CreateMessageTemplateRequestBody } from './CreateMessageTemplateRequestBody';


export class CreateMessageTemplateRequest {
    public body?: CreateMessageTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateMessageTemplateRequestBody): CreateMessageTemplateRequest {
        this['body'] = body;
        return this;
    }
}