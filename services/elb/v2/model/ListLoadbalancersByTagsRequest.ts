import { ListLoadbalancersByTagsRequestBody } from './ListLoadbalancersByTagsRequestBody';


export class ListLoadbalancersByTagsRequest {
    public body?: ListLoadbalancersByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListLoadbalancersByTagsRequestBody): ListLoadbalancersByTagsRequest {
        this['body'] = body;
        return this;
    }
}