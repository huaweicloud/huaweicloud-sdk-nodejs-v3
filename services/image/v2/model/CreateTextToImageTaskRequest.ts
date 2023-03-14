import { CreateTextToImageTaskRequestBody } from './CreateTextToImageTaskRequestBody';


export class CreateTextToImageTaskRequest {
    public body?: CreateTextToImageTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTextToImageTaskRequestBody): CreateTextToImageTaskRequest {
        this['body'] = body;
        return this;
    }
}