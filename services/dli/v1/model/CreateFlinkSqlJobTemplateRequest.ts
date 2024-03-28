import { CreateFlinkSqlJobTemplateRequestBody } from './CreateFlinkSqlJobTemplateRequestBody';


export class CreateFlinkSqlJobTemplateRequest {
    public body?: CreateFlinkSqlJobTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkSqlJobTemplateRequestBody): CreateFlinkSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}