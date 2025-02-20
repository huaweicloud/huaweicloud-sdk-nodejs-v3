

export class ListSubscriptionUserResponseSmsEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseSmsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}