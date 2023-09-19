

export class DeleteSnapshotRequest {
    private 'cluster_id'?: string;
    private 'snapshot_id'?: string;
    public constructor(clusterId?: string, snapshotId?: string) { 
        this['cluster_id'] = clusterId;
        this['snapshot_id'] = snapshotId;
    }
    public withClusterId(clusterId: string): DeleteSnapshotRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSnapshotId(snapshotId: string): DeleteSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
}