import { RebuildDesktopsReq } from './RebuildDesktopsReq';


export class BatchRebuildDesktopsSystemDiskRequest {
    public body?: RebuildDesktopsReq;
    public constructor() { 
    }
    public withBody(body: RebuildDesktopsReq): BatchRebuildDesktopsSystemDiskRequest {
        this['body'] = body;
        return this;
    }
}