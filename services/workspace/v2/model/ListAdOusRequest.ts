

export class ListAdOusRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
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