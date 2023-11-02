

export class ListSnapshotCrossRegionPolicyRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ListSnapshotCrossRegionPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListSnapshotCrossRegionPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSnapshotCrossRegionPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}