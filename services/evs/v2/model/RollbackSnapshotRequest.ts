import { RollbackSnapshotRequestBody } from './RollbackSnapshotRequestBody';


export class RollbackSnapshotRequest {
    private 'snapshot_id': string | undefined;
    public body?: RollbackSnapshotRequestBody;
    public constructor(snapshotId?: any) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): RollbackSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withBody(body: RollbackSnapshotRequestBody): RollbackSnapshotRequest {
        this['body'] = body;
        return this;
    }
}