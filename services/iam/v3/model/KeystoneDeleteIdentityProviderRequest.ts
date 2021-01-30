

export class KeystoneDeleteIdentityProviderRequest {
    public id: string;
    public constructor(id: any) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneDeleteIdentityProviderRequest {
        this['id'] = id;
        return this;
    }
}