import { RestoreClusterRequestBody } from './RestoreClusterRequestBody';


export class RestoreClusterRequest {
    private 'snapshot_id'?: string;
    public body?: RestoreClusterRequestBody;
    public constructor(snapshotId?: string) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): RestoreClusterRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withBody(body: RestoreClusterRequestBody): RestoreClusterRequest {
        this['body'] = body;
        return this;
    }
}