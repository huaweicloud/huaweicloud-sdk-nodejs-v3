

export class RuleListItem {
    private 'rule_set'?: string;
    private 'rule_id'?: string;
    private 'rule_language'?: string;
    private 'rule_name'?: string;
    private 'rule_severity'?: string;
    private 'rule_tages'?: string;
    private 'right_example'?: string;
    private 'error_example'?: string;
    private 'revise_opinion'?: string;
    private 'rule_desc'?: string;
    public constructor() { 
    }
    public withRuleSet(ruleSet: string): RuleListItem {
        this['rule_set'] = ruleSet;
        return this;
    }
    public set ruleSet(ruleSet: string  | undefined) {
        this['rule_set'] = ruleSet;
    }
    public get ruleSet(): string | undefined {
        return this['rule_set'];
    }
    public withRuleId(ruleId: string): RuleListItem {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleLanguage(ruleLanguage: string): RuleListItem {
        this['rule_language'] = ruleLanguage;
        return this;
    }
    public set ruleLanguage(ruleLanguage: string  | undefined) {
        this['rule_language'] = ruleLanguage;
    }
    public get ruleLanguage(): string | undefined {
        return this['rule_language'];
    }
    public withRuleName(ruleName: string): RuleListItem {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleSeverity(ruleSeverity: string): RuleListItem {
        this['rule_severity'] = ruleSeverity;
        return this;
    }
    public set ruleSeverity(ruleSeverity: string  | undefined) {
        this['rule_severity'] = ruleSeverity;
    }
    public get ruleSeverity(): string | undefined {
        return this['rule_severity'];
    }
    public withRuleTages(ruleTages: string): RuleListItem {
        this['rule_tages'] = ruleTages;
        return this;
    }
    public set ruleTages(ruleTages: string  | undefined) {
        this['rule_tages'] = ruleTages;
    }
    public get ruleTages(): string | undefined {
        return this['rule_tages'];
    }
    public withRightExample(rightExample: string): RuleListItem {
        this['right_example'] = rightExample;
        return this;
    }
    public set rightExample(rightExample: string  | undefined) {
        this['right_example'] = rightExample;
    }
    public get rightExample(): string | undefined {
        return this['right_example'];
    }
    public withErrorExample(errorExample: string): RuleListItem {
        this['error_example'] = errorExample;
        return this;
    }
    public set errorExample(errorExample: string  | undefined) {
        this['error_example'] = errorExample;
    }
    public get errorExample(): string | undefined {
        return this['error_example'];
    }
    public withReviseOpinion(reviseOpinion: string): RuleListItem {
        this['revise_opinion'] = reviseOpinion;
        return this;
    }
    public set reviseOpinion(reviseOpinion: string  | undefined) {
        this['revise_opinion'] = reviseOpinion;
    }
    public get reviseOpinion(): string | undefined {
        return this['revise_opinion'];
    }
    public withRuleDesc(ruleDesc: string): RuleListItem {
        this['rule_desc'] = ruleDesc;
        return this;
    }
    public set ruleDesc(ruleDesc: string  | undefined) {
        this['rule_desc'] = ruleDesc;
    }
    public get ruleDesc(): string | undefined {
        return this['rule_desc'];
    }
}