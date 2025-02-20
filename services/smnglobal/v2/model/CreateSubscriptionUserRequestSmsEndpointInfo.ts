

export class CreateSubscriptionUserRequestSmsEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestSmsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}