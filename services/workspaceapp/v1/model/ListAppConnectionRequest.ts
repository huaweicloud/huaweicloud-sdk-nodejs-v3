import { ListAppConnectionReq } from './ListAppConnectionReq';


export class ListAppConnectionRequest {
    public limit?: number;
    public offset?: number;
    public body?: ListAppConnectionReq;
    public constructor() { 
    }
    public withLimit(limit: number): ListAppConnectionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppConnectionRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListAppConnectionReq): ListAppConnectionRequest {
        this['body'] = body;
        return this;
    }
}