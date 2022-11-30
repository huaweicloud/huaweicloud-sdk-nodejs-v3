import { CreateTopicRequestBody } from './CreateTopicRequestBody';


export class CreateTopicRequest {
    public body?: CreateTopicRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTopicRequestBody): CreateTopicRequest {
        this['body'] = body;
        return this;
    }
}