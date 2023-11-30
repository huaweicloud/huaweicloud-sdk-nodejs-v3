import { UpdateRuleInstance } from './UpdateRuleInstance';


export class UpdateRuleSetReq {
    public name?: string;
    public rules?: Array<UpdateRuleInstance>;
    public constructor() { 
    }
    public withName(name: string): UpdateRuleSetReq {
        this['name'] = name;
        return this;
    }
    public withRules(rules: Array<UpdateRuleInstance>): UpdateRuleSetReq {
        this['rules'] = rules;
        return this;
    }
}