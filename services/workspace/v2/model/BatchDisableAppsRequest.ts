import { BatchOperateAppsReq } from './BatchOperateAppsReq';


export class BatchDisableAppsRequest {
    public body?: BatchOperateAppsReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateAppsReq): BatchDisableAppsRequest {
        this['body'] = body;
        return this;
    }
}