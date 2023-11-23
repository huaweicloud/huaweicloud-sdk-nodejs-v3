import { AuthorizeResourceRequestBody } from './AuthorizeResourceRequestBody';


export class RunAuthorizationActionRequest {
    public body?: AuthorizeResourceRequestBody;
    public constructor() { 
    }
    public withBody(body: AuthorizeResourceRequestBody): RunAuthorizationActionRequest {
        this['body'] = body;
        return this;
    }
}