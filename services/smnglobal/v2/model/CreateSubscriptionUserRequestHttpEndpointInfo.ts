

export class CreateSubscriptionUserRequestHttpEndpointInfo {
    public endpoint?: string;
    public header?: { [key: string]: string; };
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): CreateSubscriptionUserRequestHttpEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withHeader(header: { [key: string]: string; }): CreateSubscriptionUserRequestHttpEndpointInfo {
        this['header'] = header;
        return this;
    }
}