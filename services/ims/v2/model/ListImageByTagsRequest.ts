import { ListImageByTagsRequestBody } from './ListImageByTagsRequestBody';


export class ListImageByTagsRequest {
    public body?: ListImageByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListImageByTagsRequestBody): ListImageByTagsRequest {
        this['body'] = body;
        return this;
    }
}