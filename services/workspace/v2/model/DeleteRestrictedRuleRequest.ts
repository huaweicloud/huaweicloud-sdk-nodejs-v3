import { BatchOperateAppRulesReq } from './BatchOperateAppRulesReq';


export class DeleteRestrictedRuleRequest {
    public body?: BatchOperateAppRulesReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateAppRulesReq): DeleteRestrictedRuleRequest {
        this['body'] = body;
        return this;
    }
}