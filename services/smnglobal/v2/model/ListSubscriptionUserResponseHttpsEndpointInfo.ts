

export class ListSubscriptionUserResponseHttpsEndpointInfo {
    public endpoint?: string;
    public header?: { [key: string]: string; };
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseHttpsEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withHeader(header: { [key: string]: string; }): ListSubscriptionUserResponseHttpsEndpointInfo {
        this['header'] = header;
        return this;
    }
}