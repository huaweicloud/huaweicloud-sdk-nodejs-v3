

export class GoogleOauth2ProviderConfigInput {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    public constructor(clientId?: string, clientSecret?: string) { 
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
    }
    public withClientId(clientId: string): GoogleOauth2ProviderConfigInput {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): GoogleOauth2ProviderConfigInput {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
}