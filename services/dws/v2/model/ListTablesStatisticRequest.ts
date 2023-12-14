

export class ListTablesStatisticRequest {
    private 'cluster_id'?: string;
    private 'rate_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: string;
    private 'sort_by'?: string;
    public filter?: string;
    public value?: string;
    public constructor(clusterId?: string, rateType?: string, offset?: number, limit?: number) { 
        this['cluster_id'] = clusterId;
        this['rate_type'] = rateType;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withClusterId(clusterId: string): ListTablesStatisticRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withRateType(rateType: string): ListTablesStatisticRequest {
        this['rate_type'] = rateType;
        return this;
    }
    public set rateType(rateType: string  | undefined) {
        this['rate_type'] = rateType;
    }
    public get rateType(): string | undefined {
        return this['rate_type'];
    }
    public withOffset(offset: number): ListTablesStatisticRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTablesStatisticRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: string): ListTablesStatisticRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withSortBy(sortBy: string): ListTablesStatisticRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withFilter(filter: string): ListTablesStatisticRequest {
        this['filter'] = filter;
        return this;
    }
    public withValue(value: string): ListTablesStatisticRequest {
        this['value'] = value;
        return this;
    }
}