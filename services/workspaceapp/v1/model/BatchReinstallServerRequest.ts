import { BatchReinstallServerReq } from './BatchReinstallServerReq';


export class BatchReinstallServerRequest {
    public body?: BatchReinstallServerReq;
    public constructor() { 
    }
    public withBody(body: BatchReinstallServerReq): BatchReinstallServerRequest {
        this['body'] = body;
        return this;
    }
}