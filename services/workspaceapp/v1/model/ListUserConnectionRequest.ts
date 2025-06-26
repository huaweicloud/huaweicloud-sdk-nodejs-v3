import { ListUserConnectionReq } from './ListUserConnectionReq';


export class ListUserConnectionRequest {
    public limit?: number;
    public offset?: number;
    public body?: ListUserConnectionReq;
    public constructor() { 
    }
    public withLimit(limit: number): ListUserConnectionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListUserConnectionRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListUserConnectionReq): ListUserConnectionRequest {
        this['body'] = body;
        return this;
    }
}