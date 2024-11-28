

export class ListSupportRegionsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSupportRegionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSupportRegionsRequest {
        this['offset'] = offset;
        return this;
    }
}