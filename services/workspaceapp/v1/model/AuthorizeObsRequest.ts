import { AuthorizeObsReq } from './AuthorizeObsReq';


export class AuthorizeObsRequest {
    public body?: AuthorizeObsReq;
    public constructor() { 
    }
    public withBody(body: AuthorizeObsReq): AuthorizeObsRequest {
        this['body'] = body;
        return this;
    }
}