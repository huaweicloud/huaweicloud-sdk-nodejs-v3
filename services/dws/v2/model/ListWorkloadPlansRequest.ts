

export class ListWorkloadPlansRequest {
    private 'cluster_id'?: string;
    private 'logical_cluster_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListWorkloadPlansRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLogicalClusterName(logicalClusterName: string): ListWorkloadPlansRequest {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withLimit(limit: number): ListWorkloadPlansRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkloadPlansRequest {
        this['offset'] = offset;
        return this;
    }
}