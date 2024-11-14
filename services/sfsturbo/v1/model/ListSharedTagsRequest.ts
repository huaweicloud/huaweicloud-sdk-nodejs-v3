

export class ListSharedTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListSharedTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSharedTagsRequest {
        this['offset'] = offset;
        return this;
    }
}