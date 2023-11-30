import { RequestRuleInstance } from './RequestRuleInstance';


export class CreateRuleSetReq {
    public name?: string;
    public rules?: Array<RequestRuleInstance>;
    public constructor(name?: string, rules?: Array<RequestRuleInstance>) { 
        this['name'] = name;
        this['rules'] = rules;
    }
    public withName(name: string): CreateRuleSetReq {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<RequestRuleInstance>): CreateRuleSetReq {
        this['rules'] = rules;
        return this;
    }
}