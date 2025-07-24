

export class ListRulesRequest {
    private 'rule_languages'?: string;
    private 'rule_severity'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withRuleLanguages(ruleLanguages: string): ListRulesRequest {
        this['rule_languages'] = ruleLanguages;
        return this;
    }
    public set ruleLanguages(ruleLanguages: string  | undefined) {
        this['rule_languages'] = ruleLanguages;
    }
    public get ruleLanguages(): string | undefined {
        return this['rule_languages'];
    }
    public withRuleSeverity(ruleSeverity: string): ListRulesRequest {
        this['rule_severity'] = ruleSeverity;
        return this;
    }
    public set ruleSeverity(ruleSeverity: string  | undefined) {
        this['rule_severity'] = ruleSeverity;
    }
    public get ruleSeverity(): string | undefined {
        return this['rule_severity'];
    }
    public withOffset(offset: number): ListRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRulesRequest {
        this['limit'] = limit;
        return this;
    }
}