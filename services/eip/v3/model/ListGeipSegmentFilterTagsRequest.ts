import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListGeipSegmentFilterTagsRequest {
    public limit?: Array<number>;
    public offset?: Array<number>;
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: Array<number>): ListGeipSegmentFilterTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: Array<number>): ListGeipSegmentFilterTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListGeipSegmentFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}