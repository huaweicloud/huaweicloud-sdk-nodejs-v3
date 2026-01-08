import { AuthMethodConfigRequest } from './AuthMethodConfigRequest';


export class ValidateConfigRequest {
    public body?: AuthMethodConfigRequest;
    public constructor() { 
    }
    public withBody(body: AuthMethodConfigRequest): ValidateConfigRequest {
        this['body'] = body;
        return this;
    }
}