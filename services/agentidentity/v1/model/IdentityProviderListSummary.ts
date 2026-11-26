import { Oauth2Discovery } from './Oauth2Discovery';


export class IdentityProviderListSummary {
    private 'identity_provider'?: string;
    private 'display_name'?: string;
    private 'oauth2_discovery'?: Oauth2Discovery;
    public constructor(identityProvider?: string, displayName?: string, oauth2Discovery?: Oauth2Discovery) { 
        this['identity_provider'] = identityProvider;
        this['display_name'] = displayName;
        this['oauth2_discovery'] = oauth2Discovery;
    }
    public withIdentityProvider(identityProvider: string): IdentityProviderListSummary {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: string  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): string | undefined {
        return this['identity_provider'];
    }
    public withDisplayName(displayName: string): IdentityProviderListSummary {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withOauth2Discovery(oauth2Discovery: Oauth2Discovery): IdentityProviderListSummary {
        this['oauth2_discovery'] = oauth2Discovery;
        return this;
    }
    public set oauth2Discovery(oauth2Discovery: Oauth2Discovery  | undefined) {
        this['oauth2_discovery'] = oauth2Discovery;
    }
    public get oauth2Discovery(): Oauth2Discovery | undefined {
        return this['oauth2_discovery'];
    }
}