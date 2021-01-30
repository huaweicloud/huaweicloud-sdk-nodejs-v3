import { KeystoneCreateUserTokenByPasswordAndMfaRequestBody } from './KeystoneCreateUserTokenByPasswordAndMfaRequestBody';


export class KeystoneCreateUserTokenByPasswordAndMfaRequest {
    public nocatalog?: string;
    public body?: KeystoneCreateUserTokenByPasswordAndMfaRequestBody;
    public constructor() { 
    }
    public withNocatalog(nocatalog: string): KeystoneCreateUserTokenByPasswordAndMfaRequest {
        this['nocatalog'] = nocatalog;
        return this;
    }
    public withBody(body: KeystoneCreateUserTokenByPasswordAndMfaRequestBody): KeystoneCreateUserTokenByPasswordAndMfaRequest {
        this['body'] = body;
        return this;
    }
}