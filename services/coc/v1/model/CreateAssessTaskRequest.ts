import { CreateAssessTaskRequestBody } from './CreateAssessTaskRequestBody';


export class CreateAssessTaskRequest {
    public body?: CreateAssessTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAssessTaskRequestBody): CreateAssessTaskRequest {
        this['body'] = body;
        return this;
    }
}