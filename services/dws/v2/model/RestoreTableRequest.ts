import { RestoreTableRequestBody } from './RestoreTableRequestBody';


export class RestoreTableRequest {
    private 'snapshot_id'?: string;
    public body?: RestoreTableRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): RestoreTableRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: RestoreTableRequestBody): RestoreTableRequest {
        this['body'] = body;
        return this;
    }
}