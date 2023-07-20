import { CreateSqlTemplatesRequestBody } from './CreateSqlTemplatesRequestBody';


export class CreateSqlTemplatesRequest {
    public body?: CreateSqlTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSqlTemplatesRequestBody): CreateSqlTemplatesRequest {
        this['body'] = body;
        return this;
    }
}