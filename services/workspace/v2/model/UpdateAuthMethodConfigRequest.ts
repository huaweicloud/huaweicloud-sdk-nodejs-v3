import { AuthMethodConfigRequest } from './AuthMethodConfigRequest';


export class UpdateAuthMethodConfigRequest {
    public body?: AuthMethodConfigRequest;
    public constructor() { 
    }
    public withBody(body: AuthMethodConfigRequest): UpdateAuthMethodConfigRequest {
        this['body'] = body;
        return this;
    }
}