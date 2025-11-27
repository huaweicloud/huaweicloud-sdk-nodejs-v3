

export class ShowClusterListRequest {
    public category?: string;
    public enablestatus?: boolean;
    public clustergroupid?: string;
    public limit?: number;
    public offset?: number;
    private 'order_by'?: string;
    public order?: string;
    public managetype?: string;
    public clusterids?: string;
    public constructor() { 
    }
    public withCategory(category: string): ShowClusterListRequest {
        this['category'] = category;
        return this;
    }
    public withEnablestatus(enablestatus: boolean): ShowClusterListRequest {
        this['enablestatus'] = enablestatus;
        return this;
    }
    public withClustergroupid(clustergroupid: string): ShowClusterListRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withLimit(limit: number): ShowClusterListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowClusterListRequest {
        this['offset'] = offset;
        return this;
    }
    public withOrderBy(orderBy: string): ShowClusterListRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ShowClusterListRequest {
        this['order'] = order;
        return this;
    }
    public withManagetype(managetype: string): ShowClusterListRequest {
        this['managetype'] = managetype;
        return this;
    }
    public withClusterids(clusterids: string): ShowClusterListRequest {
        this['clusterids'] = clusterids;
        return this;
    }
}