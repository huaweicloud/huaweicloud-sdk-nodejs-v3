

export class InvokeWdrReportRequestBody {
    private 'start_snapshot_id'?: number;
    private 'end_snapshot_id'?: number;
    private 'node_id'?: string;
    public constructor(startSnapshotId?: number, endSnapshotId?: number) { 
        this['start_snapshot_id'] = startSnapshotId;
        this['end_snapshot_id'] = endSnapshotId;
    }
    public withStartSnapshotId(startSnapshotId: number): InvokeWdrReportRequestBody {
        this['start_snapshot_id'] = startSnapshotId;
        return this;
    }
    public set startSnapshotId(startSnapshotId: number  | undefined) {
        this['start_snapshot_id'] = startSnapshotId;
    }
    public get startSnapshotId(): number | undefined {
        return this['start_snapshot_id'];
    }
    public withEndSnapshotId(endSnapshotId: number): InvokeWdrReportRequestBody {
        this['end_snapshot_id'] = endSnapshotId;
        return this;
    }
    public set endSnapshotId(endSnapshotId: number  | undefined) {
        this['end_snapshot_id'] = endSnapshotId;
    }
    public get endSnapshotId(): number | undefined {
        return this['end_snapshot_id'];
    }
    public withNodeId(nodeId: string): InvokeWdrReportRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}