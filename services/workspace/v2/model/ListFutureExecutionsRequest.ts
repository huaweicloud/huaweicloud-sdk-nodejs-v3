import { ListFutureExecutionsReq } from './ListFutureExecutionsReq';


export class ListFutureExecutionsRequest {
    public body?: ListFutureExecutionsReq;
    public constructor() { 
    }
    public withBody(body: ListFutureExecutionsReq): ListFutureExecutionsRequest {
        this['body'] = body;
        return this;
    }
}