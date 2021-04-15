import { ListVpcsByTagsRequestBody } from './ListVpcsByTagsRequestBody';


export class ListVpcsByTagsRequest {
    public body?: ListVpcsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListVpcsByTagsRequestBody): ListVpcsByTagsRequest {
        this['body'] = body;
        return this;
    }
}