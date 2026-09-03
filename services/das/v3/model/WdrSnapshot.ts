

export class WdrSnapshot {
    private 'snapshot_id'?: number;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public constructor() { 
    }
    public withSnapshotId(snapshotId: number): WdrSnapshot {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: number  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): number | undefined {
        return this['snapshot_id'];
    }
    public withStartAt(startAt: number): WdrSnapshot {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): WdrSnapshot {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
}