import { CreateJobTemplatesRequestBody } from './CreateJobTemplatesRequestBody';


export class CreateJobTemplatesRequest {
    public body?: CreateJobTemplatesRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateJobTemplatesRequestBody): CreateJobTemplatesRequest {
        this['body'] = body;
        return this;
    }
}