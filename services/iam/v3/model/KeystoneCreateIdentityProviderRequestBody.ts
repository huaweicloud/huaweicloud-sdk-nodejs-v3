import { IdentityproviderOption } from './IdentityproviderOption';


export class KeystoneCreateIdentityProviderRequestBody {
    private 'identity_provider'?: IdentityproviderOption;
    public constructor(identityProvider?: IdentityproviderOption) { 
        this['identity_provider'] = identityProvider;
    }
    public withIdentityProvider(identityProvider: IdentityproviderOption): KeystoneCreateIdentityProviderRequestBody {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: IdentityproviderOption  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): IdentityproviderOption | undefined {
        return this['identity_provider'];
    }
}