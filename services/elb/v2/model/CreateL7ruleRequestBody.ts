import { CreateL7ruleReq } from './CreateL7ruleReq';


export class CreateL7ruleRequestBody {
    public rule: CreateL7ruleReq;
    public constructor(rule?: any) { 
        this['rule'] = rule;
    }
    public withRule(rule: CreateL7ruleReq): CreateL7ruleRequestBody {
        this['rule'] = rule;
        return this;
    }
}