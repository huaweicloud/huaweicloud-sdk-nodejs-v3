

export class ListDomainRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListDomainRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDomainRequest {
        this['offset'] = offset;
        return this;
    }
}