import { Rule } from './Rule';


export class UpdateAppRuleReq {
    public name?: string;
    public description?: string;
    public rule?: Rule;
    public constructor() { 
    }
    public withName(name: string): UpdateAppRuleReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAppRuleReq {
        this['description'] = description;
        return this;
    }
    public withRule(rule: Rule): UpdateAppRuleReq {
        this['rule'] = rule;
        return this;
    }
}