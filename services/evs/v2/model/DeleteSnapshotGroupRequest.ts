

export class DeleteSnapshotGroupRequest {
    private 'snapshot_group_id'?: string;
    public constructor(snapshotGroupId?: string) { 
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public withSnapshotGroupId(snapshotGroupId: string): DeleteSnapshotGroupRequest {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
}