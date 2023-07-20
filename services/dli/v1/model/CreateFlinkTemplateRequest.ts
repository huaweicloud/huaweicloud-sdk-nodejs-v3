import { CreateFlinkTemplateRequestBody } from './CreateFlinkTemplateRequestBody';


export class CreateFlinkTemplateRequest {
    public body?: CreateFlinkTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFlinkTemplateRequestBody): CreateFlinkTemplateRequest {
        this['body'] = body;
        return this;
    }
}