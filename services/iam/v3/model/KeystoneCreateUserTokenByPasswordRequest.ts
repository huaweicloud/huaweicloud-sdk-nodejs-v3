import { KeystoneCreateUserTokenByPasswordRequestBody } from './KeystoneCreateUserTokenByPasswordRequestBody';


export class KeystoneCreateUserTokenByPasswordRequest {
    public nocatalog?: string;
    public body?: KeystoneCreateUserTokenByPasswordRequestBody;
    public constructor() { 
    }
    public withNocatalog(nocatalog: string): KeystoneCreateUserTokenByPasswordRequest {
        this['nocatalog'] = nocatalog;
        return this;
    }
    public withBody(body: KeystoneCreateUserTokenByPasswordRequestBody): KeystoneCreateUserTokenByPasswordRequest {
        this['body'] = body;
        return this;
    }
}