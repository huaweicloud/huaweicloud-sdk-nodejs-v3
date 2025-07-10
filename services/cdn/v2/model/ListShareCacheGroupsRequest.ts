

export class ListShareCacheGroupsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListShareCacheGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListShareCacheGroupsRequest {
        this['offset'] = offset;
        return this;
    }
}