import { BatchSetMaintenanceModeReq } from './BatchSetMaintenanceModeReq';


export class SetMaintenanceModeRequest {
    public body?: BatchSetMaintenanceModeReq;
    public constructor() { 
    }
    public withBody(body: BatchSetMaintenanceModeReq): SetMaintenanceModeRequest {
        this['body'] = body;
        return this;
    }
}