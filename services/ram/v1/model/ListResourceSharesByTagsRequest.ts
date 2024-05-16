import { ResourceSharesByTagsReqBody } from './ResourceSharesByTagsReqBody';


export class ListResourceSharesByTagsRequest {
    public limit?: number;
    public offset?: string;
    public body?: ResourceSharesByTagsReqBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListResourceSharesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceSharesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ResourceSharesByTagsReqBody): ListResourceSharesByTagsRequest {
        this['body'] = body;
        return this;
    }
}