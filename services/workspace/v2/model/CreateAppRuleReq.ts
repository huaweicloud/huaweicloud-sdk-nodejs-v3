import { Rule } from './Rule';


export class CreateAppRuleReq {
    public name?: string;
    public description?: string;
    public rule?: Rule;
    public constructor(name?: string, rule?: Rule) { 
        this['name'] = name;
        this['rule'] = rule;
    }
    public withName(name: string): CreateAppRuleReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAppRuleReq {
        this['description'] = description;
        return this;
    }
    public withRule(rule: Rule): CreateAppRuleReq {
        this['rule'] = rule;
        return this;
    }
}