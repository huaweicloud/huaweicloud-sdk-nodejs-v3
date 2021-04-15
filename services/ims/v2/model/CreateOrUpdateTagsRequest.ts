import { AddOrUpdateTagsRequestBody } from './AddOrUpdateTagsRequestBody';


export class CreateOrUpdateTagsRequest {
    public body?: AddOrUpdateTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: AddOrUpdateTagsRequestBody): CreateOrUpdateTagsRequest {
        this['body'] = body;
        return this;
    }
}