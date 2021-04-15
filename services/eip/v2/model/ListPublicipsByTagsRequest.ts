import { ListPublicipsByTagsRequestBody } from './ListPublicipsByTagsRequestBody';


export class ListPublicipsByTagsRequest {
    public body?: ListPublicipsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListPublicipsByTagsRequestBody): ListPublicipsByTagsRequest {
        this['body'] = body;
        return this;
    }
}