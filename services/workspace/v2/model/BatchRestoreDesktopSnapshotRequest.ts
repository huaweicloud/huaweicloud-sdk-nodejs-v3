import { BatchRestoreSnapshotReq } from './BatchRestoreSnapshotReq';


export class BatchRestoreDesktopSnapshotRequest {
    public body?: BatchRestoreSnapshotReq;
    public constructor() { 
    }
    public withBody(body: BatchRestoreSnapshotReq): BatchRestoreDesktopSnapshotRequest {
        this['body'] = body;
        return this;
    }
}