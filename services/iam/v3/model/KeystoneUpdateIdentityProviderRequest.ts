import { KeystoneUpdateIdentityProviderRequestBody } from './KeystoneUpdateIdentityProviderRequestBody';


export class KeystoneUpdateIdentityProviderRequest {
    public id: string;
    public body?: KeystoneUpdateIdentityProviderRequestBody;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneUpdateIdentityProviderRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: KeystoneUpdateIdentityProviderRequestBody): KeystoneUpdateIdentityProviderRequest {
        this['body'] = body;
        return this;
    }
}