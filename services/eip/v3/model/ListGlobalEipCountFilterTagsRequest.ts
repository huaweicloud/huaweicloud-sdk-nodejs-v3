import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListGlobalEipCountFilterTagsRequest {
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListGlobalEipCountFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}