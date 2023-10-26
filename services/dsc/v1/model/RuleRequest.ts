

export class RuleRequest {
    public category?: RuleRequestCategoryEnum | string;
    public id?: string;
    private 'logic_operator'?: string;
    private 'min_match'?: number;
    private 'risk_level'?: number;
    private 'rule_content'?: string;
    private 'rule_desc'?: string;
    private 'rule_name'?: string;
    private 'rule_type'?: RuleRequestRuleTypeEnum | string;
    public constructor(category?: string, logicOperator?: string, minMatch?: number, riskLevel?: number, ruleContent?: string, ruleName?: string, ruleType?: string) { 
        this['category'] = category;
        this['logic_operator'] = logicOperator;
        this['min_match'] = minMatch;
        this['risk_level'] = riskLevel;
        this['rule_content'] = ruleContent;
        this['rule_name'] = ruleName;
        this['rule_type'] = ruleType;
    }
    public withCategory(category: RuleRequestCategoryEnum | string): RuleRequest {
        this['category'] = category;
        return this;
    }
    public withId(id: string): RuleRequest {
        this['id'] = id;
        return this;
    }
    public withLogicOperator(logicOperator: string): RuleRequest {
        this['logic_operator'] = logicOperator;
        return this;
    }
    public set logicOperator(logicOperator: string  | undefined) {
        this['logic_operator'] = logicOperator;
    }
    public get logicOperator(): string | undefined {
        return this['logic_operator'];
    }
    public withMinMatch(minMatch: number): RuleRequest {
        this['min_match'] = minMatch;
        return this;
    }
    public set minMatch(minMatch: number  | undefined) {
        this['min_match'] = minMatch;
    }
    public get minMatch(): number | undefined {
        return this['min_match'];
    }
    public withRiskLevel(riskLevel: number): RuleRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withRuleContent(ruleContent: string): RuleRequest {
        this['rule_content'] = ruleContent;
        return this;
    }
    public set ruleContent(ruleContent: string  | undefined) {
        this['rule_content'] = ruleContent;
    }
    public get ruleContent(): string | undefined {
        return this['rule_content'];
    }
    public withRuleDesc(ruleDesc: string): RuleRequest {
        this['rule_desc'] = ruleDesc;
        return this;
    }
    public set ruleDesc(ruleDesc: string  | undefined) {
        this['rule_desc'] = ruleDesc;
    }
    public get ruleDesc(): string | undefined {
        return this['rule_desc'];
    }
    public withRuleName(ruleName: string): RuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: RuleRequestRuleTypeEnum | string): RuleRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: RuleRequestRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): RuleRequestRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RuleRequestCategoryEnum {
    BUILT_IN = 'BUILT_IN',
    BUILT_SELF = 'BUILT_SELF'
}
/**
    * @export
    * @enum {string}
    */
export enum RuleRequestRuleTypeEnum {
    KEYWORD = 'KEYWORD',
    REGEX = 'REGEX',
    NLP = 'NLP'
}
