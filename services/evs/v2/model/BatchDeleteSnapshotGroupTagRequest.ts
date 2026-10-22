import { BatchDeleteResourceTagsRequestBody } from './BatchDeleteResourceTagsRequestBody';


export class BatchDeleteSnapshotGroupTagRequest {
    private 'snapshot_group_id'?: string;
    public body?: BatchDeleteResourceTagsRequestBody;
    public constructor(snapshotGroupId?: string) { 
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public withSnapshotGroupId(snapshotGroupId: string): BatchDeleteSnapshotGroupTagRequest {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
    public withBody(body: BatchDeleteResourceTagsRequestBody): BatchDeleteSnapshotGroupTagRequest {
        this['body'] = body;
        return this;
    }
}