import { AuthorizationRequest } from './AuthorizationRequest';


export class CreateAuthorizationRequest {
    public body?: AuthorizationRequest;
    public constructor() { 
    }
    public withBody(body: AuthorizationRequest): CreateAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}