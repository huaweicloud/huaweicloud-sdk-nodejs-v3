import { Oauth2Discovery } from './Oauth2Discovery';


export class MicrosoftOauth2ProviderConfigOutput {
    private 'oauth2_discovery'?: Oauth2Discovery;
    private 'client_id'?: string;
    public constructor(oauth2Discovery?: Oauth2Discovery) { 
        this['oauth2_discovery'] = oauth2Discovery;
    }
    public withOauth2Discovery(oauth2Discovery: Oauth2Discovery): MicrosoftOauth2ProviderConfigOutput {
        this['oauth2_discovery'] = oauth2Discovery;
        return this;
    }
    public set oauth2Discovery(oauth2Discovery: Oauth2Discovery  | undefined) {
        this['oauth2_discovery'] = oauth2Discovery;
    }
    public get oauth2Discovery(): Oauth2Discovery | undefined {
        return this['oauth2_discovery'];
    }
    public withClientId(clientId: string): MicrosoftOauth2ProviderConfigOutput {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}