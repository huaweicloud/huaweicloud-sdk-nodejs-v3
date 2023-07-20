import { AuthorizeResourceRequestBody } from './AuthorizeResourceRequestBody';


export class AuthorizeResourceRequest {
    public body?: AuthorizeResourceRequestBody;
    public constructor() { 
    }
    public withBody(body: AuthorizeResourceRequestBody): AuthorizeResourceRequest {
        this['body'] = body;
        return this;
    }
}