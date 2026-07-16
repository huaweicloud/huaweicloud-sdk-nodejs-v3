

export class ListPoolTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListPoolTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPoolTagsRequest {
        this['offset'] = offset;
        return this;
    }
}