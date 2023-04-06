import { LinkCopyReq } from './LinkCopyReq';


export class CopySnapshotRequest {
    private 'snapshot_id': string | undefined;
    public body?: LinkCopyReq;
    public constructor(snapshotId?: any) { 
        this['snapshot_id'] = snapshotId;
    }
    public withSnapshotId(snapshotId: string): CopySnapshotRequest {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withBody(body: LinkCopyReq): CopySnapshotRequest {
        this['body'] = body;
        return this;
    }
}