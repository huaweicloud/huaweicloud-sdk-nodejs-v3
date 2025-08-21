

export class ListClustersDetailsRequest {
    public offset?: number;
    public limit?: number;
    public datastoreType?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListClustersDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClustersDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDatastoreType(datastoreType: string): ListClustersDetailsRequest {
        this['datastoreType'] = datastoreType;
        return this;
    }
}