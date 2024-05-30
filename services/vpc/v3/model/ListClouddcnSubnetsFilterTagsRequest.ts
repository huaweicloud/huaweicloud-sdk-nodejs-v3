import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListClouddcnSubnetsFilterTagsRequest {
    public limit?: number;
    public offset?: number;
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListClouddcnSubnetsFilterTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClouddcnSubnetsFilterTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListClouddcnSubnetsFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}