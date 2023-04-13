import { CreateImageTranslateRequestBody } from './CreateImageTranslateRequestBody';


export class CreateImageTranslateTaskRequest {
    public body?: CreateImageTranslateRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageTranslateRequestBody): CreateImageTranslateTaskRequest {
        this['body'] = body;
        return this;
    }
}