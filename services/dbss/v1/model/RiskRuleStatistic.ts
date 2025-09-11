

export class RiskRuleStatistic {
    public count?: number;
    private 'rule_name'?: string;
    private 'rule_name_english'?: string;
    public constructor() { 
    }
    public withCount(count: number): RiskRuleStatistic {
        this['count'] = count;
        return this;
    }
    public withRuleName(ruleName: string): RiskRuleStatistic {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleNameEnglish(ruleNameEnglish: string): RiskRuleStatistic {
        this['rule_name_english'] = ruleNameEnglish;
        return this;
    }
    public set ruleNameEnglish(ruleNameEnglish: string  | undefined) {
        this['rule_name_english'] = ruleNameEnglish;
    }
    public get ruleNameEnglish(): string | undefined {
        return this['rule_name_english'];
    }
}