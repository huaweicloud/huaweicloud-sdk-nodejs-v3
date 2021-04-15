import { KeystoneCreateIdentityProviderRequestBody } from './KeystoneCreateIdentityProviderRequestBody';


export class KeystoneCreateIdentityProviderRequest {
    private 'Content-Type': string | undefined;
    public id: string;
    public body?: KeystoneCreateIdentityProviderRequestBody;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): KeystoneCreateIdentityProviderRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
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