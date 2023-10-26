

export class EsMatchInfo {
    private 'field_name'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: string;
    private 'rule_risk_level'?: number;
    public constructor() { 
    }
    public withFieldName(fieldName: string): EsMatchInfo {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withRuleName(ruleName: string): EsMatchInfo {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: string): EsMatchInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleRiskLevel(ruleRiskLevel: number): EsMatchInfo {
        this['rule_risk_level'] = ruleRiskLevel;
        return this;
    }
    public set ruleRiskLevel(ruleRiskLevel: number  | undefined) {
        this['rule_risk_level'] = ruleRiskLevel;
    }
    public get ruleRiskLevel(): number | undefined {
        return this['rule_risk_level'];
    }
}