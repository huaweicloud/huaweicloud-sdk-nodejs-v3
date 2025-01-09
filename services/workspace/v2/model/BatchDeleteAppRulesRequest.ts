import { BatchOperateAppRulesReq } from './BatchOperateAppRulesReq';


export class BatchDeleteAppRulesRequest {
    public body?: BatchOperateAppRulesReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateAppRulesReq): BatchDeleteAppRulesRequest {
        this['body'] = body;
        return this;
    }
}