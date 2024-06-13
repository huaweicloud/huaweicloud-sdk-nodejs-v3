import { ListSecurityGroupsByTagsRequestBody } from './ListSecurityGroupsByTagsRequestBody';


export class ListSecurityGroupsByTagsRequest {
    public body?: ListSecurityGroupsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListSecurityGroupsByTagsRequestBody): ListSecurityGroupsByTagsRequest {
        this['body'] = body;
        return this;
    }
}