

export class BatchRestoreSnapshotReq {
    private 'snapshot_ids'?: Array<string>;
    public constructor() { 
    }
    public withSnapshotIds(snapshotIds: Array<string>): BatchRestoreSnapshotReq {
        this['snapshot_ids'] = snapshotIds;
        return this;
    }
    public set snapshotIds(snapshotIds: Array<string>  | undefined) {
        this['snapshot_ids'] = snapshotIds;
    }
    public get snapshotIds(): Array<string> | undefined {
        return this['snapshot_ids'];
    }
}