

export class ListMetricsDataRequest {
    private 'cluster_id'?: string;
    private 'metric_name'?: string;
    public offset?: number;
    public limit?: number;
    public from?: number;
    public to?: number;
    private 'order_by'?: string;
    private 'sort_by'?: string;
    public constructor(clusterId?: string, metricName?: string, offset?: number, limit?: number, from?: number, to?: number) { 
        this['cluster_id'] = clusterId;
        this['metric_name'] = metricName;
        this['offset'] = offset;
        this['limit'] = limit;
        this['from'] = from;
        this['to'] = to;
    }
    public withClusterId(clusterId: string): ListMetricsDataRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withMetricName(metricName: string): ListMetricsDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withOffset(offset: number): ListMetricsDataRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMetricsDataRequest {
        this['limit'] = limit;
        return this;
    }
    public withFrom(from: number): ListMetricsDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListMetricsDataRequest {
        this['to'] = to;
        return this;
    }
    public withOrderBy(orderBy: string): ListMetricsDataRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSortBy(sortBy: string): ListMetricsDataRequest {
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