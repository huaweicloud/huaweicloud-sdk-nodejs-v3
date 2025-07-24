

export class ListShareTypesRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListShareTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListShareTypesRequest {
        this['offset'] = offset;
        return this;
    }
}