import { ListConfigInfoReq } from './ListConfigInfoReq';


export class ListCorpConfigInfoRequest {
    public body?: ListConfigInfoReq;
    public constructor() { 
    }
    public withBody(body: ListConfigInfoReq): ListCorpConfigInfoRequest {
        this['body'] = body;
        return this;
    }
}