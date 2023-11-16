import { CreateTemplatesRequestBody } from './CreateTemplatesRequestBody';


export class CreateTemplatesRequest {
    public body?: CreateTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemplatesRequestBody): CreateTemplatesRequest {
        this['body'] = body;
        return this;
    }
}