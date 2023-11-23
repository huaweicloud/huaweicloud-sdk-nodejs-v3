import { CreateJobTemplatesRequestBody } from './CreateJobTemplatesRequestBody';


export class CreateSparkJobTemplateRequest {
    public body?: CreateJobTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateJobTemplatesRequestBody): CreateSparkJobTemplateRequest {
        this['body'] = body;
        return this;
    }
}