import { BatchOperateAppRulesReq } from './BatchOperateAppRulesReq';


export class AddRestrictedRuleRequest {
    public body?: BatchOperateAppRulesReq;
    public constructor() { 
    }
    public withBody(body: BatchOperateAppRulesReq): AddRestrictedRuleRequest {
        this['body'] = body;
        return this;
    }
}