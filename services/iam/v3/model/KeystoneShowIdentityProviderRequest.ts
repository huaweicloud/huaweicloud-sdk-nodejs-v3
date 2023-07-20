

export class KeystoneShowIdentityProviderRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): KeystoneShowIdentityProviderRequest {
        this['id'] = id;
        return this;
    }
}