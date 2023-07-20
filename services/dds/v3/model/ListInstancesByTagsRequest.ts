import { ListInstancesByTagsRequestBody } from './ListInstancesByTagsRequestBody';


export class ListInstancesByTagsRequest {
    public body?: ListInstancesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListInstancesByTagsRequestBody): ListInstancesByTagsRequest {
        this['body'] = body;
        return this;
    }
}