

export class ListClusterNodesRequest {
    private 'cluster_id'?: string;
    public deleted?: string;
    private 'node_ids'?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'filter_by'?: string;
    public filter?: string;
    private 'order_by'?: string;
    public order?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListClusterNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDeleted(deleted: string): ListClusterNodesRequest {
        this['deleted'] = deleted;
        return this;
    }
    public withNodeIds(nodeIds: Array<string>): ListClusterNodesRequest {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withOffset(offset: number): ListClusterNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClusterNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFilterBy(filterBy: string): ListClusterNodesRequest {
        this['filter_by'] = filterBy;
        return this;
    }
    public set filterBy(filterBy: string  | undefined) {
        this['filter_by'] = filterBy;
    }
    public get filterBy(): string | undefined {
        return this['filter_by'];
    }
    public withFilter(filter: string): ListClusterNodesRequest {
        this['filter'] = filter;
        return this;
    }
    public withOrderBy(orderBy: string): ListClusterNodesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListClusterNodesRequest {
        this['order'] = order;
        return this;
    }
}