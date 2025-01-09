import { BatchActionDesktopsReq } from './BatchActionDesktopsReq';


export class BatchRunDesktopsRequest {
    public body?: BatchActionDesktopsReq;
    public constructor() { 
    }
    public withBody(body: BatchActionDesktopsReq): BatchRunDesktopsRequest {
        this['body'] = body;
        return this;
    }
}