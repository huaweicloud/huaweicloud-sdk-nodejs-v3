

export class ListConfigSetsRequest {
    public clusterid?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): ListConfigSetsRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withLimit(limit: number): ListConfigSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConfigSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListConfigSetsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListConfigSetsRequest {
        this['order'] = order;
        return this;
    }
}