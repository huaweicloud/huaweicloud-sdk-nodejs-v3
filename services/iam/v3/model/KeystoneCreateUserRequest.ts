import { KeystoneCreateUserRequestBody } from './KeystoneCreateUserRequestBody';


export class KeystoneCreateUserRequest {
    public body?: KeystoneCreateUserRequestBody;
    public constructor() { 
    }
    public withBody(body: KeystoneCreateUserRequestBody): KeystoneCreateUserRequest {
        this['body'] = body;
        return this;
    }
}