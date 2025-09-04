import { BatchResizeServersReq } from './BatchResizeServersReq';


export class BatchResizeServersRequest {
    public body?: BatchResizeServersReq;
    public constructor() { 
    }
    public withBody(body: BatchResizeServersReq): BatchResizeServersRequest {
        this['body'] = body;
        return this;
    }
}