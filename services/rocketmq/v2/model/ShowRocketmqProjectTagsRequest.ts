

export class ShowRocketmqProjectTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ShowRocketmqProjectTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowRocketmqProjectTagsRequest {
        this['offset'] = offset;
        return this;
    }
}