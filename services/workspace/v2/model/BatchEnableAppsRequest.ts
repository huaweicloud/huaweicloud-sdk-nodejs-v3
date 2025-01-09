import { BatchOperateAppsReq } from './BatchOperateAppsReq';


export class BatchEnableAppsRequest {
    public body?: BatchOperateAppsReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateAppsReq): BatchEnableAppsRequest {
        this['body'] = body;
        return this;
    }
}