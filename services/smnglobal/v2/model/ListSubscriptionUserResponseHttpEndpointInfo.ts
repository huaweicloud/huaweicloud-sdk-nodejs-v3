

export class ListSubscriptionUserResponseHttpEndpointInfo {
    public endpoint?: string;
    public header?: { [key: string]: string; };
    public constructor(endpoint?: string) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseHttpEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withHeader(header: { [key: string]: string; }): ListSubscriptionUserResponseHttpEndpointInfo {
        this['header'] = header;
        return this;
    }
}