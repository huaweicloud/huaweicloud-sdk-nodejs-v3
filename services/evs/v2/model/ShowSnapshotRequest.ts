

export class ShowSnapshotRequest {
    private 'snapshot_id': string | undefined;
    public constructor(snapshotId?: any) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): ShowSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
}