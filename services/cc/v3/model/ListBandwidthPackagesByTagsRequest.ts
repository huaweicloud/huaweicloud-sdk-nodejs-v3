import { ListBandwidthPackagesByTagsRequestBody } from './ListBandwidthPackagesByTagsRequestBody';


export class ListBandwidthPackagesByTagsRequest {
    public body?: ListBandwidthPackagesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListBandwidthPackagesByTagsRequestBody): ListBandwidthPackagesByTagsRequest {
        this['body'] = body;
        return this;
    }
}