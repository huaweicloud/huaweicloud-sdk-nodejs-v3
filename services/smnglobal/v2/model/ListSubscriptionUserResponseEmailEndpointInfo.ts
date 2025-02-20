

export class ListSubscriptionUserResponseEmailEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseEmailEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}