import { BatchCreateDesktopSnapshotReq } from './BatchCreateDesktopSnapshotReq';


export class BatchCreateDesktopSnapshotRequest {
    public body?: BatchCreateDesktopSnapshotReq;
    public constructor() { 
    }
    public withBody(body: BatchCreateDesktopSnapshotReq): BatchCreateDesktopSnapshotRequest {
        this['body'] = body;
        return this;
    }
}