import { ListResourcesByTagsRequestBody } from './ListResourcesByTagsRequestBody';


export class ListClouddcnSubnetsCountFilterTagsRequest {
    public body?: ListResourcesByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListResourcesByTagsRequestBody): ListClouddcnSubnetsCountFilterTagsRequest {
        this['body'] = body;
        return this;
    }
}