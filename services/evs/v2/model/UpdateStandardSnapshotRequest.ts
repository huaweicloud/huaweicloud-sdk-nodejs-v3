import { UpdateSnapshotRequestBodyV5 } from './UpdateSnapshotRequestBodyV5';


export class UpdateStandardSnapshotRequest {
    private 'snapshot_id'?: string;
    public body?: UpdateSnapshotRequestBodyV5;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): UpdateStandardSnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: UpdateSnapshotRequestBodyV5): UpdateStandardSnapshotRequest {
        this['body'] = body;
        return this;
    }
}