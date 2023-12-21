import { ListCBHByTagsRequestBody } from './ListCBHByTagsRequestBody';


export class CountInstancesByTagRequest {
    public body?: ListCBHByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListCBHByTagsRequestBody): CountInstancesByTagRequest {
        this['body'] = body;
        return this;
    }
}