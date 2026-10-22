import { BatchDeleteResourceTagsRequestBody } from './BatchDeleteResourceTagsRequestBody';


export class BatchDeleteSnapshotTagsRequest {
    private 'snapshot_id'?: string;
    public body?: BatchDeleteResourceTagsRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): BatchDeleteSnapshotTagsRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: BatchDeleteResourceTagsRequestBody): BatchDeleteSnapshotTagsRequest {
        this['body'] = body;
        return this;
    }
}