import { UpdateSnapshotRequestBody } from './UpdateSnapshotRequestBody';


export class UpdateSnapshotRequest {
    private 'snapshot_id': string | undefined;
    public body?: UpdateSnapshotRequestBody;
    public constructor(snapshotId?: any) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): UpdateSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withBody(body: UpdateSnapshotRequestBody): UpdateSnapshotRequest {
        this['body'] = body;
        return this;
    }
}