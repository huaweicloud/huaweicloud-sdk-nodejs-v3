import { ListPortsByTagsRequestBody } from './ListPortsByTagsRequestBody';


export class ListPortsByTagsRequest {
    public limit?: number;
    public offset?: number;
    public body?: ListPortsByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListPortsByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortsByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListPortsByTagsRequestBody): ListPortsByTagsRequest {
        this['body'] = body;
        return this;
    }
}