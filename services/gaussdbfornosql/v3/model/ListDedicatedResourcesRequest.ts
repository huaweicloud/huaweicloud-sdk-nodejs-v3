

export class ListDedicatedResourcesRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListDedicatedResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDedicatedResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}