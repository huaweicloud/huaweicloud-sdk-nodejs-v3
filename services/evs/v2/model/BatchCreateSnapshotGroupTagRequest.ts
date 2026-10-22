import { BatchCreateResourceTagsRequestBody } from './BatchCreateResourceTagsRequestBody';


export class BatchCreateSnapshotGroupTagRequest {
    private 'snapshot_group_id'?: string;
    public body?: BatchCreateResourceTagsRequestBody;
    public constructor(snapshotGroupId?: string) { 
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public withSnapshotGroupId(snapshotGroupId: string): BatchCreateSnapshotGroupTagRequest {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
    public withBody(body: BatchCreateResourceTagsRequestBody): BatchCreateSnapshotGroupTagRequest {
        this['body'] = body;
        return this;
    }
}