import { UpdateIdentityproviderOption } from './UpdateIdentityproviderOption';


export class KeystoneUpdateIdentityProviderRequestBody {
    private 'identity_provider': UpdateIdentityproviderOption | undefined;
    public constructor(identityProvider?: any) { 
        this['identity_provider'] = identityProvider;
    }
    public withIdentityProvider(identityProvider: UpdateIdentityproviderOption): KeystoneUpdateIdentityProviderRequestBody {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: UpdateIdentityproviderOption | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider() {
        return this['identity_provider'];
    }
}