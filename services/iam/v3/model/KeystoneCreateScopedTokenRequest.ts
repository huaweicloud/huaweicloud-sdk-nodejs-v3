import { KeystoneCreateScopedTokenRequestBody } from './KeystoneCreateScopedTokenRequestBody';


export class KeystoneCreateScopedTokenRequest {
    public body?: KeystoneCreateScopedTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: KeystoneCreateScopedTokenRequestBody): KeystoneCreateScopedTokenRequest {
        this['body'] = body;
        return this;
    }
}