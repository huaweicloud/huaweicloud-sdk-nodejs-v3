import { CreateL7ruleReq } from './CreateL7ruleReq';


export class CreateL7ruleRequestBody {
    public rule?: CreateL7ruleReq;
    public constructor(rule?: CreateL7ruleReq) { 
        this['rule'] = rule;
    }
    public withRule(rule: CreateL7ruleReq): CreateL7ruleRequestBody {
        this['rule'] = rule;
        return this;
    }
}