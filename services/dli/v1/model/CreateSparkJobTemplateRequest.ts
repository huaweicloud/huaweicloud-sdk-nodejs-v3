import { CreateSparkJobTemplateRequestBody } from './CreateSparkJobTemplateRequestBody';


export class CreateSparkJobTemplateRequest {
    public body?: CreateSparkJobTemplateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSparkJobTemplateRequestBody): CreateSparkJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}