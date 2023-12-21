import { AuthorizeCsmsAndKmsRequestBody } from './AuthorizeCsmsAndKmsRequestBody';


export class RegisterAuthorizationRequest {
    public body?: AuthorizeCsmsAndKmsRequestBody;
    public constructor() { 
    }
    public withBody(body: AuthorizeCsmsAndKmsRequestBody): RegisterAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}