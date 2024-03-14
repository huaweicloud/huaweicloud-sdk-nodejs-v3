

export class ListMetricsRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: string;
    private 'sort_by'?: string;
    public constructor(clusterId?: string, offset?: number, limit?: number) { 
        this['cluster_id'] = clusterId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withClusterId(clusterId: string): ListMetricsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListMetricsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMetricsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: string): ListMetricsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSortBy(sortBy: string): ListMetricsRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
}