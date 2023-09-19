import { RestoreSnapshotReq } from './RestoreSnapshotReq';


export class RestoreSnapshotRequest {
    private 'cluster_id'?: string;
    private 'snapshot_id'?: string;
    public body?: RestoreSnapshotReq;
    public constructor(clusterId?: string, snapshotId?: string) { 
        this['cluster_id'] = clusterId;
        this['snapshot_id'] = snapshotId;
    }
    public withClusterId(clusterId: string): RestoreSnapshotRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withSnapshotId(snapshotId: string): RestoreSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: RestoreSnapshotReq): RestoreSnapshotRequest {
        this['body'] = body;
        return this;
    }
}