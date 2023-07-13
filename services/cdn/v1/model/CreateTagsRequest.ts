import { CreateTagsRequestBody } from './CreateTagsRequestBody';


export class CreateTagsRequest {
    public body?: CreateTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTagsRequestBody): CreateTagsRequest {
        this['body'] = body;
        return this;
    }
}