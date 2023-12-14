

export class ListTopoRingsRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListTopoRingsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListTopoRingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTopoRingsRequest {
        this['limit'] = limit;
        return this;
    }
}