

export class ListCertsRequest {
    private 'cluster_id'?: string;
    public offset?: string;
    public limit?: string;
    public certsType?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListCertsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: string): ListCertsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListCertsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCertsType(certsType: string): ListCertsRequest {
        this['certsType'] = certsType;
        return this;
    }
}