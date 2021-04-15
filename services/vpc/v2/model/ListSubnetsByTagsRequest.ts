import { ListSubnetsByTagsRequestBody } from './ListSubnetsByTagsRequestBody';


export class ListSubnetsByTagsRequest {
    public body?: ListSubnetsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSubnetsByTagsRequestBody): ListSubnetsByTagsRequest {
        this['body'] = body;
        return this;
    }
}