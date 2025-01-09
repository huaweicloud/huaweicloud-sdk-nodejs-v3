import { BatchDeleteDesktopSnapshotReq } from './BatchDeleteDesktopSnapshotReq';


export class BatchDeleteDesktopSnapshotRequest {
    public body?: BatchDeleteDesktopSnapshotReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteDesktopSnapshotReq): BatchDeleteDesktopSnapshotRequest {
        this['body'] = body;
        return this;
    }
}