import { CreateVideoObjectMaskingTaskRequestBody } from './CreateVideoObjectMaskingTaskRequestBody';


export class CreateVideoObjectMaskingTaskRequest {
    public body?: CreateVideoObjectMaskingTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoObjectMaskingTaskRequestBody): CreateVideoObjectMaskingTaskRequest {
        this['body'] = body;
        return this;
    }
}