

export class ListPortTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListPortTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPortTagsRequest {
        this['offset'] = offset;
        return this;
    }
}