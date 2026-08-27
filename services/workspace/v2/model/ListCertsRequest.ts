

export class ListCertsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListCertsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCertsRequest {
        this['offset'] = offset;
        return this;
    }
}