

export class ListSubscriptionUserResponseWechatEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseWechatEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}