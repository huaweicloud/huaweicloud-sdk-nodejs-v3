

export class ListSubscriptionsRequest {
    public offset?: number;
    public limit?: number;
    public protocol?: string;
    public status?: number;
    public endpoint?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListSubscriptionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withProtocol(protocol: string): ListSubscriptionsRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStatus(status: number): ListSubscriptionsRequest {
        this['status'] = status;
        return this;
    }
    public withEndpoint(endpoint: string): ListSubscriptionsRequest {
        this['endpoint'] = endpoint;
        return this;
    }
}