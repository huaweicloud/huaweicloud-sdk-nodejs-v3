

export class ListSharesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSharesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSharesRequest {
        this['offset'] = offset;
        return this;
    }
}