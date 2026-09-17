import { CheckSnapshotReq } from './CheckSnapshotReq';


export class CheckSnapshotRequest {
    public body?: CheckSnapshotReq;
    public constructor() { 
    }
    public withBody(body: CheckSnapshotReq): CheckSnapshotRequest {
        this['body'] = body;
        return this;
    }
}