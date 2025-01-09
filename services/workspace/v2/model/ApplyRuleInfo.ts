

export class ApplyRuleInfo {
    private 'rule_type'?: string;
    public rule?: string;
    public constructor() { 
    }
    public withRuleType(ruleType: string): ApplyRuleInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withRule(rule: string): ApplyRuleInfo {
        this['rule'] = rule;
        return this;
    }
}