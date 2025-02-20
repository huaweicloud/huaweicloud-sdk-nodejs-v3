

export class CreateSubscriptionUserRequestHttpsEndpointInfo {
    public endpoint?: string;
    public header?: { [key: string]: string; };
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestHttpsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withHeader(header: { [key: string]: string; }): CreateSubscriptionUserRequestHttpsEndpointInfo {
        this['header'] = header;
        return this;
    }
}