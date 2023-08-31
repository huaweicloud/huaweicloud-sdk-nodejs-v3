import { ListTagResourceInstancesRequestBody } from './ListTagResourceInstancesRequestBody';


export class ListPrivateNatsByTagsRequest {
    public body?: ListTagResourceInstancesRequestBody;
    public constructor() { 
    }
    public withBody(body: ListTagResourceInstancesRequestBody): ListPrivateNatsByTagsRequest {
        this['body'] = body;
        return this;
    }
}