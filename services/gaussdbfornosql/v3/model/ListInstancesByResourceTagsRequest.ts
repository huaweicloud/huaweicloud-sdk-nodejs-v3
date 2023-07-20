import { ListInstancesByTagsRequestBody } from './ListInstancesByTagsRequestBody';


export class ListInstancesByResourceTagsRequest {
    public body?: ListInstancesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListInstancesByTagsRequestBody): ListInstancesByResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}