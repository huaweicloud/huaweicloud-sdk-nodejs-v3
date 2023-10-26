

export class ListBucketsRequest {
    public added?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAdded(added: boolean): ListBucketsRequest {
        this['added'] = added;
        return this;
    }
    public withOffset(offset: number): ListBucketsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBucketsRequest {
        this['limit'] = limit;
        return this;
    }
}