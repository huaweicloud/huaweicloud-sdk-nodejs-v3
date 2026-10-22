import { UpdateSnapshotGroupRequestBody } from './UpdateSnapshotGroupRequestBody';


export class UpdateSnapshotGroupRequest {
    private 'snapshot_group_id'?: string;
    public body?: UpdateSnapshotGroupRequestBody;
    public constructor(snapshotGroupId?: string) { 
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public withSnapshotGroupId(snapshotGroupId: string): UpdateSnapshotGroupRequest {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
    public withBody(body: UpdateSnapshotGroupRequestBody): UpdateSnapshotGroupRequest {
        this['body'] = body;
        return this;
    }
}