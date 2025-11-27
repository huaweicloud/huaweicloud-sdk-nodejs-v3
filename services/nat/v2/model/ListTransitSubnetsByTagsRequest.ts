import { ListTagResourceInstancesRequestBody } from './ListTagResourceInstancesRequestBody';


export class ListTransitSubnetsByTagsRequest {
    public body?: ListTagResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTagResourceInstancesRequestBody): ListTransitSubnetsByTagsRequest {
        this['body'] = body;
        return this;
    }
}