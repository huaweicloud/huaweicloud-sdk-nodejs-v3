

export class ListEnhancedConnectionsRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    public status?: string;
    public tags?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListEnhancedConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListEnhancedConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListEnhancedConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListEnhancedConnectionsRequest {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): ListEnhancedConnectionsRequest {
        this['tags'] = tags;
        return this;
    }
}