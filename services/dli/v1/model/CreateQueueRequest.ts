import { CreateQueueRequestBody } from './CreateQueueRequestBody';


export class CreateQueueRequest {
    public body?: CreateQueueRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateQueueRequestBody): CreateQueueRequest {
        this['body'] = body;
        return this;
    }
}