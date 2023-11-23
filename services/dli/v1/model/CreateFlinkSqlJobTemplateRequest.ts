import { CreateFlinkTemplateRequestBody } from './CreateFlinkTemplateRequestBody';


export class CreateFlinkSqlJobTemplateRequest {
    public body?: CreateFlinkTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkTemplateRequestBody): CreateFlinkSqlJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}