import { CheckTableRestoreRequestBody } from './CheckTableRestoreRequestBody';


export class CheckTableRestoreRequest {
    private 'snapshot_id'?: string;
    public body?: CheckTableRestoreRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): CheckTableRestoreRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: CheckTableRestoreRequestBody): CheckTableRestoreRequest {
        this['body'] = body;
        return this;
    }
}