import { IdentityproviderOption } from './IdentityproviderOption';


export class KeystoneUpdateIdentityProviderRequestBody {
    private 'identity_provider': IdentityproviderOption | undefined;
    public constructor(identityProvider: any) { 
        this['identity_provider'] = identityProvider;
    }
    public withIdentityProvider(identityProvider: IdentityproviderOption): KeystoneUpdateIdentityProviderRequestBody {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: IdentityproviderOption | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider() {
        return this['identity_provider'];
    }
}