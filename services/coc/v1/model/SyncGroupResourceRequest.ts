import { SyncResourceReq } from './SyncResourceReq';


export class SyncGroupResourceRequest {
    public id?: string;
    public body?: SyncResourceReq;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SyncGroupResourceRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: SyncResourceReq): SyncGroupResourceRequest {
        this['body'] = body;
        return this;
    }
}