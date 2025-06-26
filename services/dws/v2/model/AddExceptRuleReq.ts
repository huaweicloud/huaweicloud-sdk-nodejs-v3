import { ExceptRule } from './ExceptRule';


export class AddExceptRuleReq {
    private 'rule_name'?: string;
    private 'except_rules'?: Array<ExceptRule>;
    public constructor() { 
    }
    public withRuleName(ruleName: string): AddExceptRuleReq {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withExceptRules(exceptRules: Array<ExceptRule>): AddExceptRuleReq {
        this['except_rules'] = exceptRules;
        return this;
    }
    public set exceptRules(exceptRules: Array<ExceptRule>  | undefined) {
        this['except_rules'] = exceptRules;
    }
    public get exceptRules(): Array<ExceptRule> | undefined {
        return this['except_rules'];
    }
}