

export class ResponseRule {
    public category?: ResponseRuleCategoryEnum | string;
    private 'delete_allowed'?: boolean;
    private 'group_names'?: string;
    public id?: string;
    private 'logic_operator'?: string;
    private 'min_match'?: number;
    private 'risk_level'?: number;
    private 'rule_content'?: string;
    private 'rule_desc'?: string;
    private 'rule_name'?: string;
    private 'rule_type'?: ResponseRuleRuleTypeEnum | string;
    public selected?: boolean;
    public constructor() { 
    }
    public withCategory(category: ResponseRuleCategoryEnum | string): ResponseRule {
        this['category'] = category;
        return this;
    }
    public withDeleteAllowed(deleteAllowed: boolean): ResponseRule {
        this['delete_allowed'] = deleteAllowed;
        return this;
    }
    public set deleteAllowed(deleteAllowed: boolean  | undefined) {
        this['delete_allowed'] = deleteAllowed;
    }
    public get deleteAllowed(): boolean | undefined {
        return this['delete_allowed'];
    }
    public withGroupNames(groupNames: string): ResponseRule {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: string  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): string | undefined {
        return this['group_names'];
    }
    public withId(id: string): ResponseRule {
        this['id'] = id;
        return this;
    }
    public withLogicOperator(logicOperator: string): ResponseRule {
        this['logic_operator'] = logicOperator;
        return this;
    }
    public set logicOperator(logicOperator: string  | undefined) {
        this['logic_operator'] = logicOperator;
    }
    public get logicOperator(): string | undefined {
        return this['logic_operator'];
    }
    public withMinMatch(minMatch: number): ResponseRule {
        this['min_match'] = minMatch;
        return this;
    }
    public set minMatch(minMatch: number  | undefined) {
        this['min_match'] = minMatch;
    }
    public get minMatch(): number | undefined {
        return this['min_match'];
    }
    public withRiskLevel(riskLevel: number): ResponseRule {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): number | undefined {
        return this['risk_level'];
    }
    public withRuleContent(ruleContent: string): ResponseRule {
        this['rule_content'] = ruleContent;
        return this;
    }
    public set ruleContent(ruleContent: string  | undefined) {
        this['rule_content'] = ruleContent;
    }
    public get ruleContent(): string | undefined {
        return this['rule_content'];
    }
    public withRuleDesc(ruleDesc: string): ResponseRule {
        this['rule_desc'] = ruleDesc;
        return this;
    }
    public set ruleDesc(ruleDesc: string  | undefined) {
        this['rule_desc'] = ruleDesc;
    }
    public get ruleDesc(): string | undefined {
        return this['rule_desc'];
    }
    public withRuleName(ruleName: string): ResponseRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: ResponseRuleRuleTypeEnum | string): ResponseRule {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: ResponseRuleRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): ResponseRuleRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withSelected(selected: boolean): ResponseRule {
        this['selected'] = selected;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseRuleCategoryEnum {
    BUILT_IN = 'BUILT_IN',
    BUILT_SELF = 'BUILT_SELF'
}
/**
    * @export
    * @enum {string}
    */
export enum ResponseRuleRuleTypeEnum {
    KEYWORD = 'KEYWORD',
    REGEX = 'REGEX',
    NLP = 'NLP'
}
