

export class ListLogicalClusterTasksRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'logical_cluster_name'?: string;
    public type?: string;
    private 'order_by'?: string;
    public order?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListLogicalClusterTasksRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListLogicalClusterTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLogicalClusterTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withLogicalClusterName(logicalClusterName: string): ListLogicalClusterTasksRequest {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withType(type: string): ListLogicalClusterTasksRequest {
        this['type'] = type;
        return this;
    }
    public withOrderBy(orderBy: string): ListLogicalClusterTasksRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ListLogicalClusterTasksRequest {
        this['order'] = order;
        return this;
    }
}