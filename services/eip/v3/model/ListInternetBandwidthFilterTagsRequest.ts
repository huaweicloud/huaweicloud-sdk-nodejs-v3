import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListInternetBandwidthFilterTagsRequest {
    public limit?: Array<number>;
    public offset?: Array<number>;
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: Array<number>): ListInternetBandwidthFilterTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: Array<number>): ListInternetBandwidthFilterTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListInternetBandwidthFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}