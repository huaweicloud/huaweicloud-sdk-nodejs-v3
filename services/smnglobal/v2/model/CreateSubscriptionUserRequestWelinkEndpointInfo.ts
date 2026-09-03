

export class CreateSubscriptionUserRequestWelinkEndpointInfo {
    public endpoint?: string;
    private 'client_id'?: string;
    private 'client_secret'?: string;
    public constructor(endpoint?: string, clientId?: string, clientSecret?: string) { 
        this['endpoint'] = endpoint;
        this['client_id'] = clientId;
        this['client_secret'] = clientSecret;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestWelinkEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withClientId(clientId: string): CreateSubscriptionUserRequestWelinkEndpointInfo {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withClientSecret(clientSecret: string): CreateSubscriptionUserRequestWelinkEndpointInfo {
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