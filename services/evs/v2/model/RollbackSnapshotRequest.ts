import { RollbackSnapshotRequestBody } from './RollbackSnapshotRequestBody';


export class RollbackSnapshotRequest {
    private 'snapshot_id'?: string;
    public body?: RollbackSnapshotRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): RollbackSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: RollbackSnapshotRequestBody): RollbackSnapshotRequest {
        this['body'] = body;
        return this;
    }
}