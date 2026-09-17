

export class CheckSnapshotReq {
    private 'snapshot_name'?: string;
    public constructor() { 
    }
    public withSnapshotName(snapshotName: string): CheckSnapshotReq {
        this['snapshot_name'] = snapshotName;
        return this;
    }
    public set snapshotName(snapshotName: string  | undefined) {
        this['snapshot_name'] = snapshotName;
    }
    public get snapshotName(): string | undefined {
        return this['snapshot_name'];
    }
}