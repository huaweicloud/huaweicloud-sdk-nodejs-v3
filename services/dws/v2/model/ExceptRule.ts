

export class ExceptRule {
    private 'rule_key'?: string;
    private 'rule_value'?: string;
    public constructor() { 
    }
    public withRuleKey(ruleKey: string): ExceptRule {
        this['rule_key'] = ruleKey;
        return this;
    }
    public set ruleKey(ruleKey: string  | undefined) {
        this['rule_key'] = ruleKey;
    }
    public get ruleKey(): string | undefined {
        return this['rule_key'];
    }
    public withRuleValue(ruleValue: string): ExceptRule {
        this['rule_value'] = ruleValue;
        return this;
    }
    public set ruleValue(ruleValue: string  | undefined) {
        this['rule_value'] = ruleValue;
    }
    public get ruleValue(): string | undefined {
        return this['rule_value'];
    }
}