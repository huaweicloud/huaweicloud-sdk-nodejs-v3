import { CreateSqlTemplatesRequestBody } from './CreateSqlTemplatesRequestBody';


export class CreateSqlJobTemplateRequest {
    public body?: CreateSqlTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSqlTemplatesRequestBody): CreateSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}