import { BatchCreateResourceTagsRequestBody } from './BatchCreateResourceTagsRequestBody';


export class BatchCreateSnapshotTagsRequest {
    private 'snapshot_id'?: string;
    public body?: BatchCreateResourceTagsRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): BatchCreateSnapshotTagsRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: BatchCreateResourceTagsRequestBody): BatchCreateSnapshotTagsRequest {
        this['body'] = body;
        return this;
    }
}