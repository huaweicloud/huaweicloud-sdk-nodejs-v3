

export class CreateSubscriptionUserRequestWechatEndpointInfo {
    public endpoint?: string;
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestWechatEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
}