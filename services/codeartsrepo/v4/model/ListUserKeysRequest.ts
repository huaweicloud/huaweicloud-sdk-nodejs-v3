

export class ListUserKeysRequest {
    public offset?: number;
    public limit?: number;
    public query?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListUserKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUserKeysRequest {
        this['limit'] = limit;
        return this;
    }
    public withQuery(query: string): ListUserKeysRequest {
        this['query'] = query;
        return this;
    }
}