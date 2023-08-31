import { ListTagResourceInstancesRequestBody } from './ListTagResourceInstancesRequestBody';


export class ListTransitIpsByTagsRequest {
    public body?: ListTagResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTagResourceInstancesRequestBody): ListTransitIpsByTagsRequest {
        this['body'] = body;
        return this;
    }
}