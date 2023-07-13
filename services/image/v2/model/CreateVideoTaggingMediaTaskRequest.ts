import { CreateVideoTaggingMediaTaskRequestBody } from './CreateVideoTaggingMediaTaskRequestBody';


export class CreateVideoTaggingMediaTaskRequest {
    public body?: CreateVideoTaggingMediaTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoTaggingMediaTaskRequestBody): CreateVideoTaggingMediaTaskRequest {
        this['body'] = body;
        return this;
    }
}