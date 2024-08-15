import { ListAuthorizableTicketsReq } from './ListAuthorizableTicketsReq';


export class ListAuthorizableTicketsExternalRequest {
    public body?: ListAuthorizableTicketsReq;
    public constructor() { 
    }
    public withBody(body: ListAuthorizableTicketsReq): ListAuthorizableTicketsExternalRequest {
        this['body'] = body;
        return this;
    }
}