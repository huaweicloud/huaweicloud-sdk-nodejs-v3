import { RequestRuleInstance } from './RequestRuleInstance';


export class CreateRuleSetReq {
    public name?: string;
    public type?: string;
    public rules?: Array<RequestRuleInstance>;
    public constructor(name?: string, type?: string, rules?: Array<RequestRuleInstance>) { 
        this['name'] = name;
        this['type'] = type;
        this['rules'] = rules;
    }
    public withName(name: string): CreateRuleSetReq {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateRuleSetReq {
        this['type'] = type;
        return this;
    }
    public withRules(rules: Array<RequestRuleInstance>): CreateRuleSetReq {
        this['rules'] = rules;
        return this;
    }
}