import { KeystoneCreateAgencyTokenRequestBody } from './KeystoneCreateAgencyTokenRequestBody';


export class KeystoneCreateAgencyTokenRequest {
    public nocatalog?: string;
    public body?: KeystoneCreateAgencyTokenRequestBody;
    public constructor() { 
    }
    public withNocatalog(nocatalog: string): KeystoneCreateAgencyTokenRequest {
        this['nocatalog'] = nocatalog;
        return this;
    }
    public withBody(body: KeystoneCreateAgencyTokenRequestBody): KeystoneCreateAgencyTokenRequest {
        this['body'] = body;
        return this;
    }
}