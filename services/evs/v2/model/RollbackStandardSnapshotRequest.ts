import { RollbackSnapshotRequestBodyV5 } from './RollbackSnapshotRequestBodyV5';


export class RollbackStandardSnapshotRequest {
    private 'snapshot_id'?: string;
    public body?: RollbackSnapshotRequestBodyV5;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): RollbackStandardSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: RollbackSnapshotRequestBodyV5): RollbackStandardSnapshotRequest {
        this['body'] = body;
        return this;
    }
}