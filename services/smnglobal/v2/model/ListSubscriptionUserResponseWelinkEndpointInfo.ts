

export class ListSubscriptionUserResponseWelinkEndpointInfo {
    public endpoint?: string;
    private 'client_id'?: string;
    public constructor(endpoint?: string, clientId?: string) { 
        this['endpoint'] = endpoint;
        this['client_id'] = clientId;
    }
    public withEndpoint(endpoint: string): ListSubscriptionUserResponseWelinkEndpointInfo {
        this['endpoint'] = endpoint;
        return this;
    }
    public withClientId(clientId: string): ListSubscriptionUserResponseWelinkEndpointInfo {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}