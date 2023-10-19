import { ListCloudConnectionsByTagsRequestBody } from './ListCloudConnectionsByTagsRequestBody';


export class ListCloudConnectionsByTagsRequest {
    public body?: ListCloudConnectionsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: ListCloudConnectionsByTagsRequestBody): ListCloudConnectionsByTagsRequest {
        this['body'] = body;
        return this;
    }
}