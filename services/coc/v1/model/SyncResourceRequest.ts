import { SyncResourceReq } from './SyncResourceReq';


export class SyncResourceRequest {
    public body?: SyncResourceReq;
    public constructor() { 
    }
    public withBody(body: SyncResourceReq): SyncResourceRequest {
        this['body'] = body;
        return this;
    }
}