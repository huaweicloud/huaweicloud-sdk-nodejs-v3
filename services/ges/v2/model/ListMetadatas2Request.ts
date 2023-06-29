

export class ListMetadatas2Request {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListMetadatas2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMetadatas2Request {
        this['limit'] = limit;
        return this;
    }
}