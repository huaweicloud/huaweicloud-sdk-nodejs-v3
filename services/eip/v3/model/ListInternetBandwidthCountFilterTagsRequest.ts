import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListInternetBandwidthCountFilterTagsRequest {
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListInternetBandwidthCountFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}