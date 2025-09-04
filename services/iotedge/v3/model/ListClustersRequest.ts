

export class ListClustersRequest {
    private 'cluster_name'?: string;
    public state?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ListClustersRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withState(state: string): ListClustersRequest {
        this['state'] = state;
        return this;
    }
    public withLimit(limit: number): ListClustersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClustersRequest {
        this['offset'] = offset;
        return this;
    }
}