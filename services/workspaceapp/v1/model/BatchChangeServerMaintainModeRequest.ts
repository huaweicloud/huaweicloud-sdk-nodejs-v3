import { BatchChangeMaintainServerReq } from './BatchChangeMaintainServerReq';


export class BatchChangeServerMaintainModeRequest {
    public body?: BatchChangeMaintainServerReq;
    public constructor() { 
    }
    public withBody(body: BatchChangeMaintainServerReq): BatchChangeServerMaintainModeRequest {
        this['body'] = body;
        return this;
    }
}