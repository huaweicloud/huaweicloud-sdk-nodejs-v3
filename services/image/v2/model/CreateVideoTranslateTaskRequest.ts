import { CreateVideoTranslateTaskRequestBody } from './CreateVideoTranslateTaskRequestBody';


export class CreateVideoTranslateTaskRequest {
    public body?: CreateVideoTranslateTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoTranslateTaskRequestBody): CreateVideoTranslateTaskRequest {
        this['body'] = body;
        return this;
    }
}