

export class CreateWdrReportRequestBody {
    private 'node_id'?: string;
    private 'start_snapshot_id'?: number;
    private 'end_snapshot_id'?: number;
    private 'time_zone'?: string;
    public constructor(nodeId?: string, startSnapshotId?: number, endSnapshotId?: number, timeZone?: string) { 
        this['node_id'] = nodeId;
        this['start_snapshot_id'] = startSnapshotId;
        this['end_snapshot_id'] = endSnapshotId;
        this['time_zone'] = timeZone;
    }
    public withNodeId(nodeId: string): CreateWdrReportRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartSnapshotId(startSnapshotId: number): CreateWdrReportRequestBody {
        this['start_snapshot_id'] = startSnapshotId;
        return this;
    }
    public set startSnapshotId(startSnapshotId: number  | undefined) {
        this['start_snapshot_id'] = startSnapshotId;
    }
    public get startSnapshotId(): number | undefined {
        return this['start_snapshot_id'];
    }
    public withEndSnapshotId(endSnapshotId: number): CreateWdrReportRequestBody {
        this['end_snapshot_id'] = endSnapshotId;
        return this;
    }
    public set endSnapshotId(endSnapshotId: number  | undefined) {
        this['end_snapshot_id'] = endSnapshotId;
    }
    public get endSnapshotId(): number | undefined {
        return this['end_snapshot_id'];
    }
    public withTimeZone(timeZone: string): CreateWdrReportRequestBody {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}