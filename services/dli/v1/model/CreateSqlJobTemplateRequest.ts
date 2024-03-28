import { CreateSqlJobTemplateRequestBody } from './CreateSqlJobTemplateRequestBody';


export class CreateSqlJobTemplateRequest {
    public body?: CreateSqlJobTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSqlJobTemplateRequestBody): CreateSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}