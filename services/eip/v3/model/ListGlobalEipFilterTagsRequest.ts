import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListGlobalEipFilterTagsRequest {
    public limit?: Array<number>;
    public offset?: Array<number>;
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: Array<number>): ListGlobalEipFilterTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: Array<number>): ListGlobalEipFilterTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListGlobalEipFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}