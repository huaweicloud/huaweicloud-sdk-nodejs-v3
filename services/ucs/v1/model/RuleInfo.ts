

export class RuleInfo {
    public ruleID?: string;
    public ruleName?: string;
    public constructor() { 
    }
    public withRuleID(ruleID: string): RuleInfo {
        this['ruleID'] = ruleID;
        return this;
    }
    public withRuleName(ruleName: string): RuleInfo {
        this['ruleName'] = ruleName;
        return this;
    }
}