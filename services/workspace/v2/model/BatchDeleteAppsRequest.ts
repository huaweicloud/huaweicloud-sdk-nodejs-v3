import { BatchDeleteAppsReq } from './BatchDeleteAppsReq';


export class BatchDeleteAppsRequest {
    public body?: BatchDeleteAppsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteAppsReq): BatchDeleteAppsRequest {
        this['body'] = body;
        return this;
    }
}