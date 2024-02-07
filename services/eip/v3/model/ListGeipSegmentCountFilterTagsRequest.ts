import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListGeipSegmentCountFilterTagsRequest {
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListGeipSegmentCountFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}