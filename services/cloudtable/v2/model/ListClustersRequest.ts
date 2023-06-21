

export class ListClustersRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListClustersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClustersRequest {
        this['limit'] = limit;
        return this;
    }
}