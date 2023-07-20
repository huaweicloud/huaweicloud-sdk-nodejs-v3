

export class ListHostsRequest {
    private 'cluster_id'?: string;
    public pageSize?: string;
    public currentPage?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListHostsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPageSize(pageSize: string): ListHostsRequest {
        this['pageSize'] = pageSize;
        return this;
    }
    public withCurrentPage(currentPage: string): ListHostsRequest {
        this['currentPage'] = currentPage;
        return this;
    }
}