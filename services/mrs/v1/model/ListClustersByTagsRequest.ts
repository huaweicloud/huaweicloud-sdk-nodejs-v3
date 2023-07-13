import { ListResourceReq } from './ListResourceReq';


export class ListClustersByTagsRequest {
    public body?: ListResourceReq;
    public constructor() { 
    }
    public withBody(body: ListResourceReq): ListClustersByTagsRequest {
        this['body'] = body;
        return this;
    }
}