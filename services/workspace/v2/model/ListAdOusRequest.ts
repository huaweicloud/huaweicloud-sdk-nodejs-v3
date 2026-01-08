

export class ListAdOusRequest {
    public domain?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withDomain(domain: string): ListAdOusRequest {
        this['domain'] = domain;
        return this;
    }
    public withLimit(limit: number): ListAdOusRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAdOusRequest {
        this['offset'] = offset;
        return this;
    }
}