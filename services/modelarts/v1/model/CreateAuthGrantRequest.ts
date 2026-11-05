import { AuthGrantRequest } from './AuthGrantRequest';


export class CreateAuthGrantRequest {
    public body?: AuthGrantRequest;
    public constructor() { 
    }
    public withBody(body: AuthGrantRequest): CreateAuthGrantRequest {
        this['body'] = body;
        return this;
    }
}