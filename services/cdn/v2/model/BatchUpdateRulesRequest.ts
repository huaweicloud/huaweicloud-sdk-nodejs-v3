import { UpdateRuleStatusRequest } from './UpdateRuleStatusRequest';


export class BatchUpdateRulesRequest {
    public rules?: Array<UpdateRuleStatusRequest>;
    public constructor(rules?: Array<UpdateRuleStatusRequest>) { 
        this['rules'] = rules;
    }
    public withRules(rules: Array<UpdateRuleStatusRequest>): BatchUpdateRulesRequest {
        this['rules'] = rules;
        return this;
    }
}