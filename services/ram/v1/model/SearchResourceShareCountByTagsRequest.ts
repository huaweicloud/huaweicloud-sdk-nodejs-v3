import { ResourceSharesByTagsReqBody } from './ResourceSharesByTagsReqBody';


export class SearchResourceShareCountByTagsRequest {
    public body?: ResourceSharesByTagsReqBody;
    public constructor() { 
    }
    public withBody(body: ResourceSharesByTagsReqBody): SearchResourceShareCountByTagsRequest {
        this['body'] = body;
        return this;
    }
}