

export class ListManagedClustersRequest {
    public unimported?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withUnimported(unimported: boolean): ListManagedClustersRequest {
        this['unimported'] = unimported;
        return this;
    }
    public withLimit(limit: number): ListManagedClustersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListManagedClustersRequest {
        this['offset'] = offset;
        return this;
    }
}