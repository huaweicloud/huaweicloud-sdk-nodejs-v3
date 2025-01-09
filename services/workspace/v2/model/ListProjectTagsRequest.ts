

export class ListProjectTagsRequest {
    public offset?: number;
    public limit?: number;
    public key?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListProjectTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withKey(key: string): ListProjectTagsRequest {
        this['key'] = key;
        return this;
    }
}