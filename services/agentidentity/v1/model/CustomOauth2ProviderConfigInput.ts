import { Oauth2Discovery } from './Oauth2Discovery';


export class CustomOauth2ProviderConfigInput {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    private 'oauth2_discovery'?: Oauth2Discovery;
    public constructor(clientId?: string, clientSecret?: string, oauth2Discovery?: Oauth2Discovery) { 
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
        this['oauth2_discovery'] = oauth2Discovery;
    }
    public withClientId(clientId: string): CustomOauth2ProviderConfigInput {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): CustomOauth2ProviderConfigInput {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withOauth2Discovery(oauth2Discovery: Oauth2Discovery): CustomOauth2ProviderConfigInput {
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