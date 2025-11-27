

export class ListReposRequest {
    public clusterid?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: string;
    public constructor(clusterid?: string) { 
        this['clusterid'] = clusterid;
    }
    public withClusterid(clusterid: string): ListReposRequest {
        this['clusterid'] = clusterid;
        return this;
    }
    public withLimit(limit: number): ListReposRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListReposRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ListReposRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListReposRequest {
        this['order'] = order;
        return this;
    }
}