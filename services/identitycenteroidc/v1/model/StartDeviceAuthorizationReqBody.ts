

export class StartDeviceAuthorizationReqBody {
    private 'client_id'?: string;
    private 'client_secret'?: string;
    private 'start_url'?: string;
    public constructor(clientId?: string, clientSecret?: string, startUrl?: string) { 
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
        this['start_url'] = startUrl;
    }
    public withClientId(clientId: string): StartDeviceAuthorizationReqBody {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): StartDeviceAuthorizationReqBody {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: string  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): string | undefined {
        return this['client_secret'];
    }
    public withStartUrl(startUrl: string): StartDeviceAuthorizationReqBody {
        this['start_url'] = startUrl;
        return this;
    }
    public set startUrl(startUrl: string  | undefined) {
        this['start_url'] = startUrl;
    }
    public get startUrl(): string | undefined {
        return this['start_url'];
    }
}