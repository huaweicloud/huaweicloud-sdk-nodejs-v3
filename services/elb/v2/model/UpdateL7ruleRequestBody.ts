import { UpdateL7ruleReq } from './UpdateL7ruleReq';


export class UpdateL7ruleRequestBody {
    public rule: UpdateL7ruleReq;
    public constructor(rule?: any) { 
        this['rule'] = rule;
    }
    public withRule(rule: UpdateL7ruleReq): UpdateL7ruleRequestBody {
        this['rule'] = rule;
        return this;
    }
}