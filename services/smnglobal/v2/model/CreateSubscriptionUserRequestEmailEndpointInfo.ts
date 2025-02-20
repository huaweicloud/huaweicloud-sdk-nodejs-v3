

export class CreateSubscriptionUserRequestEmailEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestEmailEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}