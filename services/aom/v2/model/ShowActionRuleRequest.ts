

export class ShowActionRuleRequest {
    private 'rule_name'?: string;
    public constructor(ruleName?: string) { 
        this['rule_name'] = ruleName;
    }
    public withRuleName(ruleName: string): ShowActionRuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
}