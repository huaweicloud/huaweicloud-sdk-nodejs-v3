import { KeystoneCreateIdentityProviderRequestBody } from './KeystoneCreateIdentityProviderRequestBody';


export class KeystoneCreateIdentityProviderRequest {
    public id?: string;
    public body?: KeystoneCreateIdentityProviderRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneCreateIdentityProviderRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: KeystoneCreateIdentityProviderRequestBody): KeystoneCreateIdentityProviderRequest {
        this['body'] = body;
        return this;
    }
}