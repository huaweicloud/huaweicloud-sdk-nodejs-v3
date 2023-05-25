import { SyncReq } from './SyncReq';


export class ImportCheckpointRequest {
    public body?: SyncReq;
    public constructor() { 
    }
    public withBody(body: SyncReq): ImportCheckpointRequest {
        this['body'] = body;
        return this;
    }
}