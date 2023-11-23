

export class ListLtsConfigsRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListLtsConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLtsConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}