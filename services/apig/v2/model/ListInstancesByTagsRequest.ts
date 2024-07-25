import { TmsQueryReq } from './TmsQueryReq';


export class ListInstancesByTagsRequest {
    public offset?: number;
    public limit?: number;
    public body?: TmsQueryReq;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstancesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: TmsQueryReq): ListInstancesByTagsRequest {
        this['body'] = body;
        return this;
    }
}